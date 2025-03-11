/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "login-bg": "url('./src/assets/bgImageLogin.png')", // Thay bằng đường dẫn của bạn
        // "message-bg": "url('./src/assets/messenger-icon/background.png?v=1')",
      },
      animation: {
        colorChange: "colorChange 3s infinite", // Duration 3s, repeat infinitely
        borderColorChange: "borderColorChange 3s infinite",
        fadeIn: "fadeIn",
        fly: "fly 3s ease-in-out infinite",
      },
      keyframes: {
        colorChange: {
          "0%": { textDecorationColor: "rgb(255, 0, 0)" }, // Red
          "33%": { textDecorationColor: "rgb(0, 255, 0)" }, // Green
          "66%": { textDecorationColor: "rgb(0, 0, 255)" }, // Blue
          "100%": { textDecorationColor: "rgb(255, 0, 0)" }, // Back to Red
        },
        borderColorChange: {
          "0%": { borderColor: "rgb(255, 0, 0)" }, // Red
          "33%": { borderColor: "rgb(0, 255, 0)" }, // Green
          "66%": { borderColor: "rgb(0, 0, 255)" }, // Blue
          "100%": { borderColor: "rgb(255, 0, 0)" }, // Back to Red
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 50 },
          "100%": { opacity: 100 },
        },
        fly: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(10px) translateY(-10px)" },
          "50%": { transform: "translateX(20px) translateY(0)" },
          "75%": { transform: "translateX(30px) translateY(-10px)" },
          "100%": { transform: "translateX(40px) translateY(0)" },
        },
        ghostMove: {
          "0%": {
            transform:
              "translateX(20em) rotateZ(-90deg)" /* Bắt đầu từ ngoài màn hình bên phải */,
            opacity: 0 /* Mờ dần */,
          },
          "40%": {
            transform: "translateX(0) rotateZ(-90deg)" /* Di chuyển vào giữa */,
            opacity: 1 /* Mờ dần */,
          },
          "100%": {
            transform:
              "translateX(-35em) rotateZ(-90deg)" /* Di chuyển ra ngoài màn hình bên trái */,
            opacity: 1 /* Hiển thị hoàn toàn */,
          },
        },
      },
    },
  },
  plugins: [],
};
