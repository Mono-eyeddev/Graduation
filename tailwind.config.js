/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#15130F",
          soft: "#1D1A15",
          deep: "#0D0B08",
        },
        ivory: {
          DEFAULT: "#F8F4EC",
          dim: "#EFE9DC",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#DDC48C",
          deep: "#8F7136",
          line: "rgba(198, 161, 91, 0.35)",
        },
        stone: {
          DEFAULT: "#9C9585",
          light: "#B9B2A0",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
