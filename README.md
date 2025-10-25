# mdit-plugin-iconify

**Add any [Iconify](https://iconify.design) icon directly into your Markdown.**  
A lightweight [markdown-it](https://github.com/markdown-it/markdown-it) plugin for inline, scalable, customizable icons.

---

## Features

- **Use Any Iconify Collection** - Works with all [`@iconify-json/*`](https://www.npmjs.com/search?q=%40iconify-json%2F) packages or custom collections.  
- **Simple Markdown Syntax** - Embed icons with `::check::` or `::lucide/check::`.  
- **Customizable** - Size, color, and class modifiers with standard Markdown attribute syntax.  
- **Self-contained** - Icons render inline, no external network requests or fonts.  
- **Framework-agnostic** - Works in VitePress, VuePress, Nuxt Content, or any markdown-it setup.

---

## Installation

```shell
$ npm install mdit-plugin-iconify
```

and any [Iconify icon sets](https://icon-sets.iconify.design/) you need. e.g.

```shell
$ npm install @iconify-json/lucide @iconify-json/simple-icons
```

---

## Quick Setup

```ts
import MarkdownIt from "markdown-it";
import iconPlugin from "mdit-plugin-iconify";
import "mdit-plugin-iconify/index.css"; // base styles

import { icons as lucide } from "@iconify-json/lucide";
import { icons as social } from "@iconify-json/simple-icons";

const md = new MarkdownIt();

md.use(iconPlugin, {
  collections: {
    lucide,
    social,
  },
  defaultCollection: "lucide",
});
```

---

## Usage

Write icons directly in Markdown:

```md
# ::hand:: Hello World

See our [::social/github:: GitHub repository](https://github.com/utility-libraries/mdit-plugin-iconify-js)
```

Rendered output:

---

# <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></g></svg> Hello World

See our [<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align: middle"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> GitHub repository](https://github.com/utility-libraries/mdit-plugin-iconify-js)

---

## Customization

Import base CSS utilities:

```ts
import "mdit-plugin-iconify/index.css";
```

and use as needed

```markdown
::check::{.success}
::alert-circle::{.warning.lg}
```

---

## [Read the Docs](https://utility-libraries.github.io/mdit-plugin-iconify-js)

Read [the Documentation](https://utility-libraries.github.io/mdit-plugin-iconify-js) for more details about features and configuration options.
