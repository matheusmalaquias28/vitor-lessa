"use client";

import { useReveal } from "@/lib/useReveal";

/** Ativa as animações de entrada em toda a página. Não renderiza nada. */
export default function Reveal() {
  useReveal();
  return null;
}
