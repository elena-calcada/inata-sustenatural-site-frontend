import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: 'var(--font-montserrat)',
    },
    backgroundImage: {
      "home-desktop": 'url(/assets/initialImage2.png)',
      "cover-whither": 'url(/assets/cover-whither.png)',
    },
    screens: {
      'xs': { max: "639px" },
      sm: '640px',
      'sm-max': { max: "767px" },
      'sm-lg': { min: '640px', max: '1023px' },
      md: '768px',
      'md-max': { max: '1023px' },
      lg: '1024px',
      'lg-max': { max: '1279px' },
      'lg-xl': { min: '1024px', max: '1279px' },
      xl: '1280px',
      '2xl': '1440px'
    },
    extend: {
      colors: {
        textColor: "#262B2D",
        titleColor: "#0F241D",
        redAlert: "#F44336",
        green: "#00875F",
        background: "#F9F9F9",
        backgroundFooter: "#4597B1",
        blueDarkFooter: "#167796",
        grayDark: '#4E4A49',
        grayLight: "#D9D9D9",
        greenButtonBg: '#D1E74B',
        greenButtonText: '#2D490A',
        greenButtonHover: '#DFFF1B',
        blueColor: {
          base: "rgba(69, 151, 177, 1)",
          dark: "rgba(0, 94, 124, 1)",
          backgroundCard: "rgba(69, 151, 177, 0.12)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
