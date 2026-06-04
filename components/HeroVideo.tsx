"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/hero-servitecpoa.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (!video) return;

    if (media.matches) {
      video.pause();
      setPlaying(false);
      return;
    }

    video.play().catch(() => setPlaying(false));
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8 lg:pt-28">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-light shadow-elegant-lg ring-1 ring-white/5">
        <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Vídeo institucional ServitecPoa — assistência técnica em eletrodomésticos"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent"
            aria-hidden
          />

          <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
              </span>
              ServitecPoa · Porto Alegre
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="max-w-lg font-display text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              Assistência técnica que você confia
            </p>
            <p className="mt-1 text-sm text-slate-300 sm:text-base">
              Nacionais e importados · Atendimento a domicílio
            </p>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur-md transition hover:border-brand-orange hover:bg-ink"
              aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {playing ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur-md transition hover:border-brand-orange hover:bg-ink"
              aria-label={muted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
            >
              {muted ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M11 5L6 9H3v6h3l5 4V5zM19 9l-6 6M13 9l6 6" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M11 5L6 9H3v6h3l5 4V5zM15 9a3 3 0 010 6M17.5 6.5a6 6 0 010 11" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
