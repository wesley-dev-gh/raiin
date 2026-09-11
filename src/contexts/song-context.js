"use client";

import { create } from "zustand";

const songs = [
  {
    id: 1,
    title: "Rain",
    src: "/sound/rain.wav",
  },
  {
    id: 2,
    title: "Rain 2",
    src: "/sound/rain2.wav",
  },
  {
    id: 3,
    title: "Rain 3",
    src: "/sound/rain3.wav",
  },
];

export const songContext = create((set) => ({
  songs,

  currentSongIndex: 0,
  currentSong: songs[0],

  load: false,
  loop: true,
  playing: false,
  volume: 1,
  muted: false,

  setLoad: (load) => set({ load }),

  setPlaying: (playing) => set({ playing }),

  setVolume: (volume) =>
    set({
      volume: Math.max(0, Math.min(1, volume)),
      muted: volume === 0,
    }),

  setMuted: (muted) => set({ muted }),

  setLoop: (loop) => set({ loop }),

  nextSong: () =>
    set((state) => {
      const nextIndex =
        state.currentSongIndex + 1 >= state.songs.length
          ? 0
          : state.currentSongIndex + 1;

      return {
        currentSongIndex: nextIndex,
        currentSong: state.songs[nextIndex],
      };
    }),

  previousSong: () =>
    set((state) => {
      const previousIndex =
        state.currentSongIndex - 1 < 0
          ? state.songs.length - 1
          : state.currentSongIndex - 1;

      return {
        currentSongIndex: previousIndex,
        currentSong: state.songs[previousIndex],
      };
    }),

  toggleLoop: () =>
    set((state) => ({
      loop: !state.loop,
    })),

  toggleMute: () =>
    set((state) => ({
      muted: !state.muted,
    })),
}));
