module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "24px": "24px",
      },
    },
    colors: {
      i: "var(--color-i)",
      ii: "var(--color-ii)",
      iii: "var(--color-iii)",
      iv: "var(--color-iv)",
      text: {
        dark: "var(--color-text-dark)",
        light: "var(--color-text-light)",
      },
      greys: {
        4: "var(--color-grey-4)",
        6: "var(--color-grey-6)",
      },
    },
  },
  plugins: [],
};
