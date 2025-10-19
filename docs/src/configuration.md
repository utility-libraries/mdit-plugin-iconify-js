---
title: Configuration
---

# ::cog:: Configuration

The plugin accepts a configuration object when registered with **markdown-it**.  
These options control which icon collections are available and how icons are rendered.

## ::table:: Properties

| Option              | Type                                                                               | Required                 | Default  | Description                                                                                 |
|---------------------|------------------------------------------------------------------------------------|--------------------------|----------|---------------------------------------------------------------------------------------------|
| `collections`       | `Record<string, IconifyIcons>`                                                     | ::check::{.success.lg} | –        | Defines available icon sets. Each key is a collection name mapped to its Iconify JSON data. |
| `defaultCollection` | `string`                                                                           | ::x::{.error.lg}       | –        | Sets a fallback collection. Icons without an explicit collection-name use this.             |
| `iconClass`         | `string`                                                                           | ::x::{.error.lg}       | `"icon"` | Base CSS class applied to every rendered icon.                                              |
| `height`            | `string`                                                                           | ::x::{.error.lg}       | `"1em"`  | Default icon height; width scales automatically.                                            |
| `iconResolver`      | `(collection: string, name: string) => IconData \| Promise<IconData> \| undefined` | ::x::{.error.lg}       | –        | Custom resolver for loading icons dynamically or from non-Iconify sources.                  |

## ::braces:: Type Definitions

<<< @/../../src/types.ts

## ::settings:: Example Configuration

```ts
import MarkdownIt from "markdown-it";
import iconPlugin from "mdit-plugin-iconify";
import { icons as lucide } from "@iconify-json/lucide";
import { icons as social } from "@iconify-json/simple-icons";

const md = new MarkdownIt();

md.use(iconPlugin, {
  collections: {
    lucide,
    social,
  },
  defaultCollection: "lucide",
  iconClass: "iconify",
  height: "1.2em",
});
```

This configuration enables both **Lucide** and **Simple Icons**,
sets `"lucide"` as the default collection, and applies the `.iconify` class to all icons.

## ::rocket:: Advanced Use: Custom Resolver

You can provide an `iconResolver` to fetch icons dynamically from an API, filesystem, or custom source.

> [!WARNING] async iconResolver are currently unsupported

```ts
md.use(iconPlugin, {
  collections: { lucide },
  iconResolver: async (collection, name) => {
    if (collection === "remote") {
      const res = await fetch(`https://example.com/icons/${name}.svg`);
      const svg = await res.text();
      return { body: svg };
    }
  },
});
```

This approach lets you extend the plugin beyond Iconify JSON sets while keeping the same syntax.
