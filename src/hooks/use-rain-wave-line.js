"use client";

import { useEffect, useRef } from "react";

const useRainWaveLine = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Instancia o áudio
    const audio = new Audio("/sound/rain.wav");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    let analyser;
    let source;
    let dataArray;

    // Função para inicializar o contexto de áudio apenas na interação
    const initAudio = () => {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        audioContextRef.current = audioCtx;

        analyser = audioCtx.createAnalyser();
        // Tamanho da amostra. Valores menores (ex: 256) deixam a linha menos "tensa"
        analyser.fftSize = 512;

        // Removemos o smoothing exagerado. O TimeDomainData já é bem fluido.
        analyser.smoothingTimeConstant = 0.5;

        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerX = width / 2;

      ctx.clearRect(0, 0, width, height);

      // Se o áudio ainda não iniciou, desenha uma linha reta no centro
      if (!analyser) {
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, height);
        ctx.strokeStyle = "#f2f2f2";
        ctx.lineWidth = 1;
        ctx.stroke();
        return;
      }

      // Captura o formato REAL da onda no exato milissegundo
      analyser.getByteTimeDomainData(dataArray);

      ctx.beginPath();

      const sliceHeight = height / dataArray.length;
      let y = 0;

      for (let i = 0; i < dataArray.length; i++) {
        // Os valores variam de 0 a 255. 128 é o centro (silêncio).
        const v = dataArray[i] / 128.0;

        // Deslocamento máximo é 35% da tela para não encostar nas bordas
        const maxAmplitude = width * 0.35;
        const x = centerX + (v - 1) * maxAmplitude;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        y += sliceHeight;
      }

      ctx.strokeStyle = "#f2f2f2";
      // Aumentei levemente a espessura para dar mais presença, ajuste se necessário
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.stroke();
    };

    draw();

    const startAudio = () => {
      try {
        initAudio();

        // 1. Chama o play() IMEDIATAMENTE (Síncrono) para não perder a flag do usuário
        const playPromise = audio.play();

        // Trata a promise do play separadamente para não bloquear o fluxo
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Reprodução bloqueada pelo navegador:", error);
          });
        }

        // 2. Retoma o contexto de áudio sem usar 'await'
        if (audioContextRef.current.state === "suspended") {
          audioContextRef.current.resume();
        }
      } catch (error) {
        console.error("Erro ao iniciar áudio:", error);
      }
    };

    // Usamos touchstart e click para garantir cobertura máxima no mobile e desktop
    window.addEventListener("touchstart", startAudio, { once: true });
    window.addEventListener("click", startAudio, { once: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("click", startAudio);

      audio.pause();
      audio.src = ""; // Libera a memória do áudio

      if (source) source.disconnect();
      if (analyser) analyser.disconnect();

      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  return {
    canvasRef,
    audioRef,
    animationRef,
    audioContextRef,
  };
};

export default useRainWaveLine;
