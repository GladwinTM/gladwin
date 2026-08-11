"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;

export function PointerEffects() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!trail || prefersReducedMotion.matches || !finePointer.matches) return;

    const particles = Array.from(trail.children) as HTMLSpanElement[];
    let currentTarget: HTMLElement | null = null;
    let activeStarCount = 1;

    const updateStarCount = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-star-count]"));
      const currentSection = sections.reduce<HTMLElement | null>((active, section) => {
        return section.getBoundingClientRect().top <= window.innerHeight * 0.55 ? section : active;
      }, null) ?? sections[0];

      activeStarCount = Number(currentSection?.dataset.starCount ?? 1);
    };

    const handleMove = (event: PointerEvent) => {
      const shadowX = ((event.clientX / window.innerWidth) - 0.5) * 12;
      const shadowY = ((event.clientY / window.innerHeight) - 0.5) * 12;
      document.documentElement.style.setProperty("--text-shadow-x", `${shadowX.toFixed(2)}px`);
      document.documentElement.style.setProperty("--text-shadow-y", `${shadowY.toFixed(2)}px`);

      particles.forEach((particle, index) => {
        if (index >= activeStarCount) {
          particle.style.opacity = "0";
          return;
        }

        const lag = index * 5;
        window.setTimeout(() => {
          particle.style.setProperty("--x", `${event.clientX}px`);
          particle.style.setProperty("--y", `${event.clientY}px`);
          particle.style.opacity = `${Math.max(0.04, 0.86 - index * 0.07)}`;
        }, lag);
      });

      const nextTarget = (event.target as HTMLElement).closest<HTMLElement>("[data-depth-text]");
      if (nextTarget === currentTarget) return;
      currentTarget?.removeAttribute("data-depth-active");
      nextTarget?.setAttribute("data-depth-active", "true");
      currentTarget = nextTarget;
    };

    const handleLeave = () => {
      particles.forEach((particle) => { particle.style.opacity = "0"; });
      currentTarget?.removeAttribute("data-depth-active");
      currentTarget = null;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", updateStarCount, { passive: true });
    window.addEventListener("resize", updateStarCount, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    updateStarCount();
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", updateStarCount);
      window.removeEventListener("resize", updateStarCount);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={trailRef} className="pointer-trail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => <span key={index} />)}
    </div>
  );
}
