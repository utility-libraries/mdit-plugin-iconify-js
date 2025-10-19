---
title: Usage
---

# ::heading-1:: Usage

`mdit-plugin-iconify` adds a simple syntax for embedding icons directly into Markdown.  
You can write icons inline without HTML or SVG markup

## ::code:: Syntax

Use the pattern:
```
::[collection]/[icon-name]::
```

Example:
```markdown
::lucide/check::
::lucide/alert-circle::
```

Rendered:
::lucide/check::
::lucide/alert-circle::

If you configured a `defaultCollection`, you can omit the collection name:

```markdown
::check::
::alert-circle::
```

Rendered:
::check::
::alert-circle::

## ::a-large-small:: Changing Icon Sizes

When you import the base stylesheet `mdit-plugin-iconify/index.css`,
you gain access to predefined size modifiers.

```markdown
::type-outline::{.sm}
::type-outline::{.md}
::type-outline::{.lg}
::type-outline::{.xl}
```

Rendered:
::type-outline::{.sm}
::type-outline::{.md}
::type-outline::{.lg}
::type-outline::{.xl}

These classes adjust the icon’s width and height relative to the text line height.

## ::paint-bucket:: Changing Icon Colors

```markdown
::check::{.success}
::triangle-alert::{.warning}
::x::{.error}
::info::{.info}
```
Rendered:
::check::{.success}
::triangle-alert::{.warning}
::x::{.error}
::info::{.info}

## ::braces:: Adding Classes to Icons

Add custom classes to any icon by placing them inside curly braces after the icon name:

```markdown
::check::{.green}
::triangle-alert::{.orange}
```

Rendered:
::check::{.success}
::triangle-alert::{.warning}

Each class is appended to the generated `<svg>` element of the SVG icon.
This follows standard Markdown attribute syntax.

Don't forget to [declare your classes in your CSS](customization.md):

```css
.icon.green { color: #16a34a; }
.icon.orange { color: #f59e0b; }
```

You can combine these with the built-in `.sm`, `.md`, `.lg`, and `.xl` size classes for full control.
