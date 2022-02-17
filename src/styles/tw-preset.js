module.exports = {
  theme: {
    extend: {
      borderRadius: {
        "24px": "24px",
      },
      boxShadow: {
        select: "0px 4px 8px rgba(1, 4, 20, 0.04)",
        input:
          "-3px 3px 0px #DBE8FB, -3px -3px 0px #DBE8FB, 3px -3px 0px #DBE8FB, 3px 3px 0px #DBE8FB, 3px 3px 0px #DBE8FB",
      },
    },
    colors: {
      i: "var(--color-i)",
      ii: "var(--color-ii)",
      iii: "var(--color-iii)",
      iv: "var(--color-iv)",
      v: "var(--color-v)",
      text: {
        dark: "var(--color-text-dark)",
        light: "var(--color-text-light)",
      },
      greys: {
        4: "var(--color-grey-4)",
        5: "var(--color-grey-5)",
        6: "var(--color-grey-6)",
      },
      system: {
        error: "var(--color-system-error)",
        success: "var(--color-system-success)",
      },
    },
  },
  plugins: [],
};
