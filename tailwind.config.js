/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./work/**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        surface: {
          DEFAULT: "#fafafa",
          muted: "#f4f4f5",
        },
      },
      maxWidth: {
        prose: "68ch",
        content: "72rem",
      },
    },
  },
  plugins: [],
};
