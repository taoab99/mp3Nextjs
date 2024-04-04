import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        modal: "rgba(0, 0, 0, .6)",
      },
      spacing: {
        spc70: "70px",
      },
      colors: {
        "text-active": "var(text-primary)",
      },
      borderRadius: {
        "1/2": "50%",
      },
      zIndex: {
        max: "999",
      },
    },
  },
  plugins: [],
};
export default config;
