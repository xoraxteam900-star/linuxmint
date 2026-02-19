import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#e6f7f3',
          100: '#b3e8de',
          200: '#80d9c9',
          300: '#4dcab4',
          400: '#26bf9f',
          500: '#00B894',
          600: '#00A884',
          700: '#008f6d',
          800: '#007556',
          900: '#005c3f',
        },
        desktop: {
          dark: '#0f1f18',
          light: '#1e3a2f',
        },
        window: {
          bg: '#1a1a2e',
          title: '#2d2d44',
          titleActive: '#3d3d5c',
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        'window-open': 'windowOpen 200ms ease-out forwards',
        'window-close': 'windowClose 150ms ease-in forwards',
        'menu-slide': 'menuSlide 200ms ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        windowOpen: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        windowClose: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        menuSlide: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

