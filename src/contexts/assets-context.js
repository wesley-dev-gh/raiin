"use client";

import { create } from "zustand";

export const assetsContext = create((set) => ({
  // --- ESTADO INICIAL ---
  videos: {
    loaded: false,
    loading: true, // Começa true assumindo que o hook de preload vai rodar no mount
  },
  sounds: {
    loaded: false,
    loading: true,
  },
  images: {
    loaded: false,
    loading: true,
  },

  // --- ACTIONS ---

  // Opção 1: Função genérica para atualizar qualquer categoria
  setAssetStatus: (category, status) =>
    set((state) => ({
      [category]: {
        ...state[category],
        ...status,
      },
    })),

  // Opção 2: Funções específicas (caso prefira chamar diretamente)
  setVideosStatus: (loading, loaded) =>
    set(() => ({ videos: { loading, loaded } })),

  setSoundsStatus: (loading, loaded) =>
    set(() => ({ sounds: { loading, loaded } })),
}));
