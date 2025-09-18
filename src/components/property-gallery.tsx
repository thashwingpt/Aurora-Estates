"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import * as React from "react";

interface PropertyGalleryProps {
  title: string;
  images: string[];
}

export function PropertyGallery({ title, images }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const openLightbox = React.useCallback((index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = React.useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const showPrevious = React.useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isLightboxOpen) return;
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox, isLightboxOpen, showNext, showPrevious]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <Image
          src={images[activeIndex]}
          alt={`${title} hero image`}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Gallery</p>
            <h2 className="font-display text-lg font-semibold">{title}</h2>
            <p className="text-xs text-white/70">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] backdrop-blur transition hover:bg-white/20"
            onClick={() => openLightbox(activeIndex)}
          >
            <Maximize2 className="h-4 w-4" />
            Expand
          </button>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10" />
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex">
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`gallery-thumb ${index === activeIndex ? "border-primary/60 shadow-glow" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              openLightbox(index);
            }}
          >
            <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true">
          <div className="lightbox-content">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-full w-full">
              <Image src={images[activeIndex]} alt={`${title} expanded image`} fill className="object-contain" />
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4">
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-full border border-white/30 bg-black/50 p-3 text-white backdrop-blur transition hover:bg-black/70"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-white/30 bg-black/50 p-3 text-white backdrop-blur transition hover:bg-black/70"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
