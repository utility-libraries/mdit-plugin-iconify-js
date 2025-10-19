---
layout: home

hero:
  name: "mdit-plugin-iconify"
  text: "Add icons directly in your Markdown using Iconify collections"
  tagline: "A lightweight markdown-it plugin that renders any Iconify icon inline."
  actions:
    - theme: brand
      text: Get Started
      link: /quick-start
    - theme: alt
      text: Repository
      link: https://github.com/utility-libraries/mdit-plugin-iconify-js
    - theme: alt
      text: npm
      link: https://npmjs.com/package/mdit-plugin-iconify
    - theme: alt
      text: iconify
      link: https://iconify.design/

features:
  - title: Use Any Iconify Collection
    details: Load icons from @iconify-json packages or your own collections.
    link: https://icon-sets.iconify.design/
    linkText: Browse Iconify
  - title: Simple Markdown Syntax
    details: Embed icons with `::[collection]/[icon-name]::` or `::[icon-name]::`.
    link: /usage
    linkText: See usage
  - title: Fully Customizable
    details: Add size modifiers, custom CSS, or replace icon sets anytime.
    link: /customization
    linkText: See customization
  - title: Cleaner Than Unicode Icons
    details: Semantic markup instead of obscure Unicode symbols or inline SVG strings.
  - title: Packed Inline, Instantly Loaded
    details: Icons are bundled into the rendered HTML, no external requests done.
  - title: Framework-Agnostic Output
    details: Works with any static site generator or frontend framework consuming Markdown.
---

<div style="height: 1em"></div>

## ::type-outline:: Usage Examples

### Within a Heading ::heading-3::

Within a paragraph ::type-outline:: and with different colors ::palette::{.warning}.

### ::table:: Within a Table

| Feature         | Example                     |
|-----------------|-----------------------------|
| Easy to install | ::check::{.success.lg}      |
| Customizable    | ::check::{.success.lg}    |
| Missing icon    | ::x::{.error.lg}          |

### ::a-large-small:: Or with different sizes

::bug::{.sm}
::bug::{.md}
::bug::{.lg}
::bug::{.xl}

## ::book:: License & Links

**License:** [`GPL-3.0-or-later`](https://github.com/utility-libraries/mdit-plugin-iconify-js/tree/main/LICENSE)  
**Repository:** [::social/github:: GitHub](https://github.com/utility-libraries/mdit-plugin-iconify-js)  
**Package:** [::social/npm:: npm](https://npmjs.com/package/mdit-plugin-iconify)  
