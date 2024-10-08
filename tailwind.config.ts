import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      fontFamily: {
        'calibre': ['Calibre', 'sans-serif'],
      },
      screens: {
        sm: '240px', // Change the sm breakpoint to 510px
      },
      colors: {
        'primary-color': '#64ffda',
        'heading-color': '#ccd6f6',
        'navy-color': '#071a35'
      },
      boxShadow: {
        'custom-lg': '4px 4px #64ffda', // Custom shadow with solid color at bottom-left
      },
    },
  },
  plugins: [],
};
export default config;
