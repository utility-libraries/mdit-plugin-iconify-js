/**
 * Parse `{.class1 .class2 attr=val attr2="spaced val"}` into attributes.
 * Matches the same shorthand as Markdown-It-Curly-Attributes.
 */
export function parseAttrs(input: string | undefined): Record<string, string> {
  if (!input) return {};

  const out: Record<string, string> = {};
  const regex = /\.(\w[\w-]*)|(\w[\w-]*)=("[^"]+"|'[^']+'|[^\s}]+)/g;

  let match: RegExpExecArray | null;
  while ((match = regex.exec(input))) {
    if (match[1]) {
      // class shorthand
      out.class = (out.class ? out.class + " " : "") + match[1];
    } else if (match[2]) {
      const key = match[2];
      let val = match[3];
      if (val?.startsWith('"') || val?.startsWith("'")) {
        val = val.slice(1, -1);
      }
      out[key] = val;
    }
  }

  return out;
}
