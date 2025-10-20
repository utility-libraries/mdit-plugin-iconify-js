import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";
import type { IconData, IconRenderOptions } from "./types.ts";
import { IconifyJSON } from "@iconify/types";

/**
 * Try to resolve an icon from Iconify collections map.
 */
export function getIconFromCollections(
    collections: Record<string, IconifyJSON>,
    collection: string,
    name: string,
    opts: IconRenderOptions = {}
): IconData | undefined {
  const iconSet = collections[collection];
  if (!iconSet) return undefined;

  const data = getIconData(iconSet, name);
  if (!data) return undefined;

  const svg = iconToSVG(data, { height: opts.height ?? "1em" });
  return {
    body: svg.body,
    attributes: svg.attributes,
  };
}

/**
 * Render SVG string from resolved icon data.
 */
export function renderSVG(
    icon: IconData,
    extraAttrs: Record<string, string> = {},
    opts: IconRenderOptions = {}
): string {
  const baseClass = opts.iconClass ?? "icon";
  const attrs: Record<string, string> = {
    class: "",
    ...icon.attributes,
    ...extraAttrs,
  };
  attrs.class = `${baseClass} ${attrs.class}`.trim();

  return iconToHTML(replaceIDs(icon.body), attrs);
}
