/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "login-bg": "url('./src/assets/bgImageLogin.png')", // Thay bằng đường dẫn của bạn
        "message-bg": "url('./src/assets/messenger-icon/background.png')"
      },
      keyframes: {
        colorChange: {
          '0%': { textDecorationColor: 'rgb(255, 0, 0)' }, // Red
          '33%': { textDecorationColor: 'rgb(0, 255, 0)' }, // Green
          '66%': { textDecorationColor: 'rgb(0, 0, 255)' }, // Blue
          '100%': { textDecorationColor: 'rgb(255, 0, 0)' }, // Back to Red
        },
        borderColorChange: {
          '0%': { borderColor: 'rgb(255, 0, 0)' }, // Red
          '33%': { borderColor: 'rgb(0, 255, 0)' }, // Green
          '66%': { borderColor: 'rgb(0, 0, 255)' }, // Blue
          '100%': { borderColor: 'rgb(255, 0, 0)' }, // Back to Red
        },
      },
      animation: {
        colorChange: 'colorChange 3s infinite', // Duration 3s, repeat infinitely
        borderColorChange: 'borderColorChange 3s infinite'
      },
    },
  },
  plugins: [],
};
