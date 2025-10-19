import type MarkdownIt from "markdown-it";
import type { IconData, IconifyPluginOptions, IconRenderOptions, IconResolver } from "./types.js";
import { getIconFromCollections, renderSVG } from "./adapter.ts";
import { parseAttrs } from "./attrs.ts";

export type { IconData, IconResolver, IconRenderOptions, IconifyPluginOptions };


/**
 * Markdown-It plugin to render ::collection/name::{.class attr=val} syntax.
 */
export default function mditPluginIconify(md: MarkdownIt, opts: IconifyPluginOptions) {
  if (!opts || !opts.collections) {
    throw new Error("[mdit-plugin-iconify] `collections` option is required.");
  }

  const {collections, defaultCollection, iconResolver, iconClass, height} = opts;

  // Matches ::[collection/]name::{...}
  const iconPattern = /::(?:([^\/:\s]+)\/)?([^:\s]+)::(\{[^}]*})?/gi;

  md.core.ruler.before("curly_attributes", "iconify_replace", (state) => {
    const tokens = state.tokens;

    for (const token of tokens) {
      if (token.type !== "inline" || !token.children) continue;

      const newChildren: any[] = [];

      for (const child of token.children) {
        if (child.type !== "text") {
          newChildren.push(child);
          continue;
        }

        const matches = [...child.content.matchAll(iconPattern)];
        if (!matches.length) {
          newChildren.push(child);
          continue;
        }

        let lastIndex = 0;

        for (const match of matches) {
          const [full, maybeCollection, name, rawAttrs] = match;
          const collection = maybeCollection || defaultCollection;

          if (!collection) {
            // skip if no default and no explicit collection
            continue;
          }

          // Try to resolve from user collections
          let icon: IconData | undefined = getIconFromCollections(
              collections,
              collection,
              name,
              {height, iconClass}
          );

          // Fallback to resolver if provided
          if (!icon && iconResolver) {
            const result = iconResolver(collection, name);
            if (result instanceof Promise) {
              // todo: async resolvers unsupported inside Markdown-It core
              console.warn(`[mdit-plugin-iconify] async iconResolver are currently unsupported`);
              icon = undefined;
            } else {
              icon = result;
            }
          }

          if (!icon) {
            console.warn(`[mdit-plugin-iconify] Unknown icon: '${collection}:${name}'`);
            continue;
          }

          const extraAttrs = parseAttrs(rawAttrs);
          const svgHTML = renderSVG(icon, extraAttrs, {iconClass, height});

          // Push text before match
          if (match.index! > lastIndex) {
            newChildren.push({
              type: "text",
              content: child.content.slice(lastIndex, match.index),
              level: child.level,
            });
          }

          // Push rendered icon
          newChildren.push({
            type: "html_inline",
            content: svgHTML,
            level: child.level,
          });

          lastIndex = match.index! + full.length;
        }

        // Push remaining text
        if (lastIndex < child.content.length) {
          newChildren.push({
            type: "text",
            content: child.content.slice(lastIndex),
            level: child.level,
          });
        }
      }

      token.children = newChildren;
    }
  });
}
