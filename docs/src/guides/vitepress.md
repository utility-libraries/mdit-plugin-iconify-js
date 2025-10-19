---
title: VitePress Integration
---

# ::zap:: Integration Guide: VitePress

This guide explains how to integrate **mdit-plugin-iconify** into a VitePress project.

## ::download:: Install Plugin and Icon Sets

Start with a standard [VitePress setup](https://vitepress.dev/guide/getting-started).

Install the plugin and the icon sets you need.  
This example uses the `lucide` collection:

```bash
npm install mdit-plugin-iconify
npm install @iconify-json/lucide
````

You can add additional collections as needed, e.g., `simple-icons` or custom sets.

## ::cog:: Configure VitePress

Extend your VitePress configuration to register the plugin with **markdown-it**:

::: code-group

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress';
import mdPluginIconify from "mdit-plugin-iconify";
import { icons as lucideIcons } from "@iconify-json/lucide";

export default defineConfig({
  // ... other VitePress config
  markdown: {
    config(md) {
      md.use(mdPluginIconify, {
        collections: {
          lucide: lucideIcons,
        },
        defaultCollection: "lucide",
      });
    },
  },
});
```

:::

This makes all icons in the `lucide` collection available in your Markdown.
The `defaultCollection` allows you to omit the collection prefix for cleaner syntax.

## ::palette:: Add Default Styles

Import the plugin’s base CSS to style and size icons automatically:

::: code-group

```ts [.vitepress/theme.ts]
import "mdit-plugin-iconify/index.css";
import DefaultTheme from "vitepress/theme";

export default DefaultTheme;
```

:::

This ensures alignment, sizing, and color utilities are applied.

## ::keyboard:: Test in Markdown

Add an icon to any Markdown file, e.g., `index.md`:

::: code-group

```md [index.md]
# ::hand:: Hello World
```

:::

Rendered output:

---

# ::hand:: Hello World


## ::rocket:: Notes

* You can use any icon collection configured in `collections`.
* Combine with size and semantic classes (`.sm`, `.lg`, `.success`, `.warning`) for richer visual cues.
* Works with both page content and custom Markdown components.
