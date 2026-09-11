"use client";

import { backgrounds } from "@/data/backgrounds";
import { create } from "zustand";

export const backgroundContext = create((set) => ({
  currentBackground: backgrounds[0],

  setBackground: (background) =>
    set({
      currentBackground: background,
    }),

  resetBackground: () =>
    set({
      currentBackground: null,
    }),
}));
