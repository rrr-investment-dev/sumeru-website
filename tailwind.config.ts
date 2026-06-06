import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          deep: '#D25000',
          primary: '#FC6900',
          light: '#FF8842',
          soft: '#FF9A5C',
        },
        ink: '#0E0B08',
        ink2: '#4A413B',
        paper: '#FFFBF6',
        card: '#FFFFFF',
        line: '#EBE4DA',
        accentBg: '#FFF4EB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['Palatino', 'Palatino Linotype', 'Book Antiqua', 'URW Palladio L', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '1240px',
      },
      spacing: {
        gutter: '1.5rem',
        'gutter-lg': '2.5rem',
        section: '4rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
};
export default config;
