import localFont from "next/font/local";
import { Sofia_Sans } from "next/font/google";

// Google font
export const sofia = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Nimbus Sans
export const nimbusSans = localFont({
  src: [
    {
      path: "./nimbus-sans-l_regular-condensed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./nimbus-sans-l_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Sofia Sans", "sans-serif"],
});

// Heroess
export const textHeroes = localFont({
  src: [
    {
      path: "./texgyreheroscn-regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./texgyreheros-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Sofia Sans", "sans-serif"],
});
