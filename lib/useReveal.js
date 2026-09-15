"use client";

import { useEffect } from "react";

/**
 * Observa todos os elementos .rv da página e aplica .visivel ao entrarem na tela.
 * Respeita prefers-reduced-motion.
 */
export function useReveal() {
  useEffect(() => {
    const itens = document.querySelectorAll(".rv");
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || semMovimento) {
      itens.forEach((i) => i.classList.add("visivel"));
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    itens.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
}
