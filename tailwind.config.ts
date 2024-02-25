import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'brown': '#2B231D',
        'red': '#DE6868',
        'pastel': '#AA9F96',
        'primary': '#353D33FF',
        'pastel3': '#F8F9FA',
      },
      backgroundImage: {
        'about-cafe': "url('/assets/img/coffee-plant.png')",
        'gallery-tree': "url('/assets/img/gallery-tree.png')",
        'gallery-cafe': "url('/assets/img/gallery-cafe.png')",
        'gallery-chair': "url('/assets/img/gallery-chair.png')",
      },
      fontFamily: {
        "dmSans": ["DM Sans", "sans-serif"],
        "playfairDisplay": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
