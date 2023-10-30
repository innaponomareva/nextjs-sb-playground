import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/{pages,components}/**/*.{js,ts,jsx,tsx}"],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
