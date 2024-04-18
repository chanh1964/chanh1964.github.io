import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        chanh: {
          primary: '#343131',
          secondary: '#fefeff',
          emphasize: {
            DEFAULT: '#0b7f6b',
            '50': '#edfaf9',
            '100': '#dcf2f0',
            '200': '#ade0db',
            '300': '#83ccc3',
            '400': '#3ca698',
            '500': '#0b7f6b',
            '600': '#09735e',
            '700': '#075e47',
            '800': '#044d34',
            '900': '#023823',
            '950': '#012414',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
