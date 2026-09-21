import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#56B259',
          'green-hover': '#479E4A',
          'green-light': '#EBF7EC',
          dark: '#181E19',
          'dark-card': '#202721',
          'dark-border': '#2D372E',
          text: '#5F695F',
          heading: '#181E19',
          bg: '#F8FAF8',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
