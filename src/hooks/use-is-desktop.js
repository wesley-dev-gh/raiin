"use client";

import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setIsDesktop(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
