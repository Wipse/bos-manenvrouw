/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: ({ theme }) => ({
        center: true,
        padding: {
          DEFAULT: theme("spacing.4"),
        },
        screens: {
          DEFAULT: `${1120 + 32}px`, // Container max-width, including padding.
        },
      }),
      fontSize: {
        h1: ["6rem", { lineHeight: "1.2", fontWeight: "700" }], // 96px
        h2: ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }], // 36px
        h3: ["1.875rem", { lineHeight: "1.4", fontWeight: "600" }], // 30px
        h4: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }], // 24px
        h5: ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }], // 20px
        h6: ["1.125rem", { lineHeight: "1.5", fontWeight: "500" }], // 18px
        // Responsive variants (smaller screens)
        "h1-sm": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }], // 36px
        "h2-sm": ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }], // 30px
        "h3-sm": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "h4-sm": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }], // 20px
        "h5-sm": ["1.125rem", { lineHeight: "1.5", fontWeight: "500" }], // 18px
        "h6-sm": ["1rem", { lineHeight: "1.5", fontWeight: "500" }], // 16px
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Bitter", "serif"],
      },
      colors: {
        primary: {
          50: "#FBFAF3",
          100: "#fdf9e8",
          200: "#faf2c2",
          300: "#f6e68c",
          400: "#f0d454",
          500: "#BA9E1E",
          600: "#a08719",
          700: "#856f15",
          800: "#6b5917",
          900: "#5a4a18",
        },
      },
    },
  },
  plugins: [],
};
