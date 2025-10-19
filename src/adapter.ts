import { getIconData, iconToSVG } from "@iconify/utils";
import type { IconData, IconRenderOptions } from "./types.ts";
import { IconifyJSON } from "@iconify/types";
import { escapeAttr } from "./attrs.ts";

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
    style: "",
    class: "",
    ...icon.attributes,
    ...extraAttrs,
  };
  attrs.class = `${baseClass} ${attrs.class}`.trim();

  const attrStr = Object.entries(attrs)
      .map(([k, v]) => `${k}="${escapeAttr(String(v))}"`)
      .join(" ");

  return `<svg ${attrStr}>${icon.body}</svg>`;
}
