"use client"

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfessionalsSlider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const container = containerRef.current;
    if (!container) return;

    const slide = container.querySelector<HTMLElement>("[data-slide]");
    const cardWidth = slide ? slide.offsetWidth : container.clientWidth;
    const gap = 16; // gap-4 entre os cards

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Setas de navegação (apenas telas maiores; no mobile o usuário desliza) */}
      <div className="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 sm:block">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollByCard(1)}
          aria-label="Próximos profissionais"
          className="size-9 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 -left-3 z-10 hidden -translate-y-1/2 sm:block">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollByCard(-1)}
          aria-label="Profissionais anteriores"
          className="size-9 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
        >
          <ChevronLeft className="size-5" />
        </Button>
      </div>
    </div>
  );
}