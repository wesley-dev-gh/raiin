"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const useCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  const startedRef = useRef(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;

    if (!dot || !ring || !text) return;

    // =========================================================
    // ESTADO INICIAL
    // =========================================================

    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
      x: -100,
      y: -100,
      scale: 0,
      opacity: 0,
    });

    gsap.set(ring, {
      xPercent: -50,
      yPercent: -50,
      x: -100,
      y: -100,
      width: 140,
      height: 140,
      scale: 1,
      opacity: 1,
    });

    gsap.set(text, {
      opacity: 1,
      scale: 1,
    });

    // =========================================================
    // MOVIMENTO
    // =========================================================

    const moveDot = gsap.quickTo(dot, "x", {
      duration: 0.1,
      ease: "power3",
    });

    const moveDotY = gsap.quickTo(dot, "y", {
      duration: 0.1,
      ease: "power3",
    });

    const moveRing = gsap.quickTo(ring, "x", {
      duration: 0.45,
      ease: "power3",
    });

    const moveRingY = gsap.quickTo(ring, "y", {
      duration: 0.45,
      ease: "power3",
    });

    const onMove = (e) => {
      moveDot(e.clientX);
      moveDotY(e.clientY);

      moveRing(e.clientX);
      moveRingY(e.clientY);
    };

    // =========================================================
    // PRIMEIRO CLIQUE
    // =========================================================

    const onClick = () => {
      // Primeiro clique da página
      if (!startedRef.current) {
        startedRef.current = true;

        // Remove o texto
        gsap.to(text, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          ease: "power2.out",
        });

        // Reduz o anel para o tamanho normal
        gsap.to(ring, {
          width: 40,
          height: 40,
          duration: 0.55,
          ease: "power3.inOut",
        });

        // Pequena expansão ao entrar no estado normal
        gsap
          .timeline()
          .to(ring, {
            scale: 1.35,
            duration: 0.2,
            ease: "power2.out",
          })
          .to(ring, {
            scale: 1,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
          });

        // Mostra o dot
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
          ease: "power2.out",
        });

        return;
      }

      // =======================================================
      // CLIQUES NORMAIS
      // =======================================================

      gsap
        .timeline()
        .to(ring, {
          scale: 2,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(ring, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "elastic.out(1,0.5)",
        });

      gsap
        .timeline()
        .to(dot, {
          scale: 2,
          duration: 0.15,
        })
        .to(dot, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1,0.5)",
        });
    };

    // =========================================================
    // HOVER — LINKS / BUTTONS
    // =========================================================

    const onEnterLink = () => {
      if (!startedRef.current) return;

      gsap.to(ring, {
        scale: 2.5,
        opacity: 0.5,
        borderColor: "#a78bfa",
        duration: 0.3,
        ease: "back.out(2)",
      });

      gsap.to(dot, {
        scale: 0.4,
        duration: 0.3,
      });
    };

    const onLeaveLink = () => {
      if (!startedRef.current) return;

      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        borderColor: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
      });
    };

    // =========================================================
    // HOVER — LI
    // =========================================================

    const onEnterLi = () => {
      if (!startedRef.current) return;

      gsap.to(ring, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onLeaveLi = () => {
      if (!startedRef.current) return;

      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        borderColor: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // =========================================================
    // ELEMENTOS INTERATIVOS
    // =========================================================

    const interactives = document.querySelectorAll("a, button, [data-cursor]");

    const interactivesPlaces = document.querySelectorAll("li");

    interactivesPlaces.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLi);
      el.addEventListener("mouseleave", onLeaveLi);
    });

    interactives.forEach((el) => {
      if (el.closest("li")) return;

      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    // =========================================================
    // EVENTOS GLOBAIS
    // =========================================================

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);

      interactivesPlaces.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLi);
        el.removeEventListener("mouseleave", onLeaveLi);
      });

      interactives.forEach((el) => {
        if (el.closest("li")) return;

        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);
  return { dotRef, ringRef, textRef, startedRef };
};

export default useCursor;
