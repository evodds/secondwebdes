import type { Config } from "tailwindcss";
import tokens from "../../design/tokens.json";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: "var(--color-accent-primary)",
          "primary-foreground": "var(--color-accent-primary-foreground)"
        },
        text: {
          strong: "var(--color-text-strong)",
          muted: "var(--color-text-muted)"
        },
        surface: {
          base: "var(--color-surface-base)",
          subtle: "var(--color-surface-subtle)"
        }
      },
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      fontSize: {
        display: tokens.typography.display.size,
        h2: tokens.typography.h2.size,
        body: tokens.typography.body.size
      },
      fontWeight: {
        display: String(tokens.typography.display.weight),
        h2: String(tokens.typography.h2.weight),
        body: String(tokens.typography.body.weight)
      },
      lineHeight: {
        display: String(tokens.typography.display.line),
        h2: String(tokens.typography.h2.line),
        body: String(tokens.typography.body.line)
      }
    }
  }
};

export default config;
