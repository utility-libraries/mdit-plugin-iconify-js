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
 * Can return either synchronously or asynchronously. (asynchronously currently unsupported)
 * Return `undefined` if the icon cannot be found.
 */
export type IconResolver = (
    /** The name of the collection requested */
    collection: string,
    /** The icon name within the collection */
    name: string,
) => IconifyIcon | undefined | Promise<IconifyIcon | undefined>

/**
 * Options that control the rendering of individual icons.
 */
export interface IconRenderOptions {
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

/**
 * Options passed to `mdit-plugin-iconify`.
 */
export interface IconifyPluginOptions extends IconRenderOptions {
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
  defaultCollection?: string

  /**
   * Optional resolver for non-Iconify icons or dynamic icons.
   * Useful for fetching icons from external sources or custom collections.
   */
  iconResolver?: IconResolver
}
