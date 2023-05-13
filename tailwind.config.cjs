/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['"Bangers"', "cursive"],
        sourceCodePro: ['"Source Code Pro"', "monospace"],
      },
    },
  },
  plugins: [],
};
