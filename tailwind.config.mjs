/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        Ovo: ['var(--font-ovo)', 'Ovo', 'serif'],
      },
    },
  },
  plugins:[],
};
