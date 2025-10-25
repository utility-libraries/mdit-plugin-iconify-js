import { IconifyJSON, IconifyIcon } from "@iconify/types";

/**
 * Represents the raw data of an icon.
 */
export type IconData = {
  /**
   * The SVG content of the icon. Must already be sanitized to prevent XSS when injected into HTML.
   */
  body: string
  /**
   * Optional attributes to apply to the root SVG element.
   */
  attributes?: Record<string, string>
}

/**
 * A function to resolve an icon dynamically.
 * @param collection name of the collection requested
 * @param name icon name within the collection
 * @return `undefined` if the icon cannot be found.
 */
export type IconResolver = (
    collection: string | undefined,
    name: string,
) => IconifyIcon | IconData | undefined

/**
 * @param collection name of the collection requested
 * @param name icon name within the collection
 * @param attributes html-attributes to add to the svg-html
 * @return svg-html or undefined if not found
 */
export type IconRenderer = (
    collection: string | undefined,
    name: string,
    attributes?: Record<string, string>,
) => string | undefined

/**
 * Options passed to `createIconRenderer`.
 */
export interface CreateIconRendererOptions {
  /**
   * Map of collection name -> Iconify icon set.
   * Example: { lucide, "simple-icons": simpleIcons }
   */
  collections: Record<string, IconifyJSON>

  /**
   * Optional default collection name.
   * If provided, icons without a collection prefix use this collection.
   * If omitted, unprefixed icons are ignored.
   */
  defaultCollection?: string | IconifyJSON

  /**
   * Optional resolver for non-Iconify icons or dynamic icons.
   * Useful for fetching icons from external sources or custom collections.
   */
  iconResolver?: IconResolver

  /**
   * Default height for rendered icons.
   * Width will scale automatically to maintain aspect ratio.
   */
  height?: string

  /**
   * CSS class to apply to every rendered icon element.
   */
  iconClass?: string
}
