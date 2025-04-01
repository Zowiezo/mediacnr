// tailwind.config.js
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {
        "black": {
          extend: "dark",
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            primary: {
              // 50: "#3B096C",
              100: "#CFFFE1",
              200: "#A0FFCC",
              300: "#70FFC1",
              400: "#4DFFC3",
              500: "#12FFC6",
              600: "#0DDBBD",
              700: "#09B7AF",
              800: "#058D93",
              900: "#03697A",
              DEFAULT: "#12FFC6",
              foreground: "#ffffff",
            },
            focus: "#70FFC1",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },

  darkMode: "class",
  plugins: [heroui()],
};
