"use client";

import { useEffect } from "react";

export default function TabTitle() {
  useEffect(() => {
    const originalTitle = document.title;

    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let dots = 0;

        document.title = "CHILL OUT";

        interval = setInterval(() => {
          dots = (dots + 1) % 4;

          document.title = `CHILL OUT${".".repeat(dots)}`;
        }, 500);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
