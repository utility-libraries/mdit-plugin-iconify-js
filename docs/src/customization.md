---
title: Customization
---

# ::settings-2:: Customization

`mdit-plugin-iconify` provides default styles and utility classes, but you can fully customize how icons appear in your Markdown.

## ::palette:: CSS Customization

Import the base stylesheet to get default alignment and size utilities:

```ts
import "mdit-plugin-iconify/index.css";
````

---

### ::braces:: Override Styles

You can override base styles or add your own CSS:

```css
/* Base icon styling */
.icon {
  color: var(--brand-color); /* default color */
}

/* Size utility classes */
.icon.sm { width: 0.9em; height: 0.9em; }
.icon.md { width: 1.2em; height: 1.2em; }
.icon.lg { width: 1.5em; height: 1.5em; }
.icon.xl { width: 2em; height: 2em; }

/* Semantic color classes */
.icon.success { color: #16a34a; }
.dark .icon.success { color: #4ade80; }
.icon.warning { color: #f59e0b; }
.dark .icon.warning { color: #facc15; }
.icon.error { color: #dc2626; }
.dark .icon.error { color: #f87171; }
.icon.info { color: #2563eb; }
.dark .icon.info { color: #60a5fa; }
```

### ::merge:: Combining Classes

You can combine semantic and size classes for flexible styling:

```markdown
::check::{.success.lg}
::alert-circle::{.warning.md}
```

Rendered icons will inherit both color and size classes, keeping your Markdown clean and consistent.

### ::wrench:: Tips

* Use `.sm`, `.md`, `.lg`, `.xl` for quick scaling.
* Use custom semantic classes like `.success`, `.warning`, `.error`, `.info` for status indicators.
* Combine your own utility classes with these defaults for complete control.

This approach keeps icons visually aligned, responsive, and theme-aware.
