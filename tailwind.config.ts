import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darktop: "var(--darktop)",
        lighterdarktop: "var(--lighterdarktop)",
        greytext: "var(--greytext)",
      },
    },
  },
  plugins: [
    nextui({
      // prefix: "nextui", // prefix for themes variables
      // addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      // defaultTheme: "dark", // default theme from the themes object
      // defaultExtendTheme: "dark", // default theme to extend on custom themes
      // layout: {}, // common layout tokens (applied to all themes)
      // themes: {
      //   light: {
      //     layout: {}, // light theme layout tokens
      //     colors: {
      //       primary: "#FCFCFD",
      //       secondary: "#ffffff",
      //     }, // light theme colors
      //   },
      //   dark: {
      //     layout: {}, // dark theme layout tokens
      //     colors: {
      //       primary: "#0D111D",
      //       secondary: "#151D29",
      //     }, // dark theme colors
      //   },
      //   // ... custom themes
      // },
    }),
  ],
} satisfies Config;
