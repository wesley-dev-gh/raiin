"use client";

import { assetsContext } from "@/contexts/assets-context";
import { useEffect } from "react";

// Mapeamento idêntico à sua pasta public/
const ASSET_MANIFEST = {
  fonts: [
    "/fonts/nimbus-sans-l_bold.otf",
    "/fonts/nimbus-sans-l_regular-condensed.otf",
    "/fonts/texgyreheros-bold.otf",
    "/fonts/texgyreheroscn-regular.otf",
  ],
  images: ["/images/png/NOISEE.png"],
  sounds: ["/sound/rain.wav"],
  videos: [
    "/videos/webm/behind-the-window.webm",
    "/videos/webm/cabin-in-the-forest-(day).webm",
    "/videos/webm/cabin-in-the-forest-(night).webm",
    "/videos/webm/sheets.webm",
  ],
};

export function usePreloadAssets() {
  const { setAssetStatus } = assetsContext((state) => state);

  useEffect(() => {
    async function preloadCategory(category, urls) {
      if (!urls || urls.length === 0) return;

      try {
        setAssetStatus(category, { loading: true, loaded: false });

        // Verifica se o navegador suporta Cache API
        const hasCacheApi = "caches" in window;
        const cache = hasCacheApi
          ? await caches.open(`media-assets-${category}`)
          : null;

        await Promise.all(
          urls.map(async (url) => {
            // Se já está em cache, evita requisição de rede
            if (cache) {
              const matched = await cache.match(url);
              if (matched) return;
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro ao baixar: ${url}`);

            if (cache) {
              await cache.put(url, response.clone());
            }
          }),
        );

        setAssetStatus(category, { loading: false, loaded: true });
      } catch (error) {
        console.error(`Erro no preload de [${category}]:`, error);
        setAssetStatus(category, { loading: false, loaded: false });
      }
    }

    // Dispara o download em paralelo por categoria
    Object.entries(ASSET_MANIFEST).forEach(([category, urls]) => {
      preloadCategory(category, urls);
    });
  }, [setAssetStatus]);
}
