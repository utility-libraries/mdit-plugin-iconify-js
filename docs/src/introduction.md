---
title: "Introduction"
---

# ::lightbulb:: Why Use mdit-plugin-iconify

`mdit-plugin-iconify` extends **markdown-it** to let you insert icons directly into Markdown using any [Iconify](https://iconify.design) collection.

It solves a simple but common problem: Markdown supports text, code, and images - but not scalable icons that integrate cleanly with text and styling systems.

## ::goal:: Use Case

When writing documentation, blogs, or component guides, icons often improve clarity and visual hierarchy:

- ::check::{.success} Mark completed features  
- ::triangle-alert::{.warning} Highlight warnings  
- ::package::{color=#FFA500} Show package names  
- ::link::{color=#1E90FF} Indicate links or external resources  

Without this plugin, you would either:
- Copy raw SVGs into Markdown (verbose and unmaintainable), or  
- Use Unicode emoji (limited and inconsistent across platforms).

`mdit-plugin-iconify` replaces that with a **consistent, extensible** syntax:

```markdown
::check-circle:: Features Ready
::social/github:: View Source
````

## ::rocket:: Advantages

### 1. Universal Icon Access

Supports all [`@iconify-json/*`](https://www.npmjs.com/search?q=%40iconify-json%2F) packages and custom collections.
Tens of thousands of icons are instantly available.

### 2. Semantic and Readable

Icons are defined with clear text syntax, not SVG blobs or magic Unicode characters that may not be supported.

### 3. Inline and Self-Contained

Icons are packed directly into the rendered HTML - no external network calls or font loading.

### 4. Size and Class Modifiers

Control visual size or apply utility classes right inside Markdown:

```markdown
::bug::{.lg.text-red-500}
```

### 5. Framework-Agnostic

Works with any environment that uses Markdown and `markdown-it`:
VitePress, VuePress, Nuxt Content, or custom Node.js pipelines.

## ::scale:: When to Use It

Use `mdit-plugin-iconify` if:

* You want visual clarity without leaving Markdown.
* You prefer icons that load instantly and scale perfectly.
* You already use markdown-it or VitePress-based tooling.

Avoid it only if:

* You rely on Markdown parsers that don’t use `markdown-it`.
* You require dynamic, interactive icons that depend on runtime JavaScript.
