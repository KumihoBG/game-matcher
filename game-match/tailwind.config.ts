import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundColor: {
        primary: '#071324',
        secondary: '#040b15',
        btnPrimary: '#d4e3f7',
        btnSecondary: '#7faae6',
        block: '#23252a',
      },
      backgroundImage: {
        'controller': 'url("/images/background.png")',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#d4e3f7',
        secondary: '#7faae6',
        dark: '#464a53',
        black: '#17191c',
        footer: '#808080'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace']
      },
      boxShadow: {
        grey: '0px 0px 15px grey;'
      },
      animation: {
        'fade-slow': 'fadeOut 3s ease-in-out',
        'ease-slow-in': 'easeSlowIn 1s ease-in',
      },
      keyframes: {
        fadeOut: {
          '100%': { transform: 'translateX(200%)' },
        },
        easeSlowIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    }
  },
  plugins: [],
};
export default config;
