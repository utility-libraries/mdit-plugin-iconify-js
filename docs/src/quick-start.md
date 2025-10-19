---
title: Quick Start
---

# ::square-terminal:: Quick Start

This guide shows how to set up **mdit-plugin-iconify** and start using icons in Markdown.

## ::download:: Installation

Install the plugin package:

```bash
$ npm install mdit-plugin-iconify
````

Then install one or more [Iconify icon sets](https://icon-sets.iconify.design/) you want to use.
This Guide will use [`lucide`](https://icon-sets.iconify.design/lucide/) and [`simple-icons`](https://icon-sets.iconify.design/simple-icons/).

```bash
$ npm install @iconify-json/lucide @iconify-json/simple-icons
```

## ::cog:: Configuration

Import and register the plugin with **markdown-it**:

```ts
import MarkdownIt from "markdown-it";
import iconPlugin from "mdit-plugin-iconify";
import "mdit-plugin-iconify/index.css"; // recommended base styles

import { icons as lucideIcons } from "@iconify-json/lucide";
import { icons as simpleIcons } from "@iconify-json/simple-icons";

const md = new MarkdownIt();

md.use(iconPlugin, {
  collections: {
    lucide: lucideIcons,
    social: simpleIcons,
  },
  defaultCollection: "lucide", // optional
});
```

This setup gives you access to any icon from your chosen collections.
You can also omit `defaultCollection` if you always specify prefixes like `::social/github`.::

## ::keyboard:: Usage

Write icons directly in Markdown:

```md
### ::hand:: Hello World

See our [::social/github:: GitHub repository](...).
```

Rendered output:

---
### ::hand:: Hello World

See our [::social/github:: GitHub repository](https://github.com/utility-libraries/mdit-plugin-iconify-js).

## ::check-circle:: Done

You can now use icons inline anywhere Markdown is parsed by `markdown-it` - VitePress, VuePress, or your own build system.
