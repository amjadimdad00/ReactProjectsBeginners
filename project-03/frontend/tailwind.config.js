/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5.7px 9.5px 0px rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        custom: "13.1842px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".custom-border-gradient": {
          borderImageSource: `radial-gradient(
            80.69% 208.78% at 108.28% 112.58%,
            #eabfff 0%,
            rgba(135, 38, 183, 0) 100%
          ), radial-gradient(
            80.38% 222.5% at -13.75% -12.36%,
            #98f9ff 0%,
            rgba(255, 255, 255, 0) 100%
          )`,
          borderImageSlice: "1",
        },
        ".custom-background": {
          background: `url(.png), radial-gradient(
            90.16% 143.01% at 15.32% 21.04%,
            rgba(165, 239, 255, 0.2) 0%,
            rgba(110, 191, 244, 0.0447917) 77.08%,
            rgba(70, 144, 213, 0) 100%
          )`,
          backgroundBlendMode: "overlay, normal",
        },
      });
    }),
  ],
};
