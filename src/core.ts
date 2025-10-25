import type MarkdownIt from "markdown-it";
import type { IconData, CreateIconRendererOptions, IconRenderer } from "./types.ts";
import { parseAttrs } from "./utils.ts";
import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";
import { IconifyIcon } from "@iconify/types";


/**
 * Matches `::[collection/]name::[{...}]`
 */
export const mditPluginIconifyPattern = /::(?:([^\/:\s]+)\/)?([^:\s]+)::(\{[^}]*})?/gi;


/**
 * Creates an icon renderer. Useful if you need to resolve to an icons svg-html in another place.
 */
export function createIconRenderer(opts: CreateIconRendererOptions): IconRenderer {
  const { collections, defaultCollection, iconResolver, iconClass, height } = opts;

  return (collection, name, attributes) => {
    // resolve collection-name
    const collectionOrName = collection ?? defaultCollection;
    if (!collectionOrName) return undefined;

    // resolve icon-set
    const iconSet = typeof collectionOrName === "string" ? collections[collectionOrName] : collectionOrName;
    if (!iconSet) return undefined;

    // resolve icon-data
    let data: IconifyIcon | undefined = getIconData(iconSet, name) as IconifyIcon;
    if (!data && iconResolver) data = iconResolver(collection, name);
    if (!data) return undefined;

    // normalize icon
    const icon = iconToSVG(data, { height: height ?? "1em" }) as IconData;
    if (!icon) return undefined;

    // render icon to html
    const attrs: Record<string, string> = {
      class: "",
      ...icon.attributes,
      ...attributes,
    };
    attrs.class = `${iconClass ?? "icon"} ${attrs.class}`.trim();
    return iconToHTML(replaceIDs(icon.body), attrs);
  };
}


/**
 * Markdown-It plugin to render ::collection/name::{.class attr=val} syntax.
 */
export default function mditPluginIconify(md: MarkdownIt, iconRenderer: IconRenderer | CreateIconRendererOptions) {
  iconRenderer = typeof iconRenderer === "function" ? iconRenderer : createIconRenderer(iconRenderer);

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

        const matches = [...child.content.matchAll(mditPluginIconifyPattern)];
        if (!matches.length) {
          newChildren.push(child);
          continue;
        }

        let lastIndex = 0;

        for (const match of matches) {
          const [full, maybeCollection, name, rawAttrs] = match;
          const attributes = parseAttrs(rawAttrs);
          const svgHTML = iconRenderer(maybeCollection, name, attributes);

          if (!svgHTML) {
            console.warn(`[mdit-plugin-iconify] Unknown icon: '${full}'`);
            continue;
          }

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
