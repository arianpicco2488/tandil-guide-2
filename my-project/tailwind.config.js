// tailwind.config.js
export default {
  theme: {
    extend: {
      animation: {
        shine: "shine 2s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.8)" },
        },
      },
    },
  },
  plugins: [],
}
