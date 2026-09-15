"use client";

import { useEffect, useState } from "react";

const pad = (n) => (n < 10 ? "0" + n : String(n));

/**
 * Contagem regressiva até a data alvo.
 * Só começa a contar no cliente, para não quebrar a hidratação do Next.
 */
export function useContagem(dataISO) {
  const [tempo, setTempo] = useState({ d: "00", h: "00", m: "00", s: "00", acabou: false, pronto: false });

  useEffect(() => {
    const alvo = new Date(dataISO).getTime();

    const tick = () => {
      const dif = alvo - Date.now();
      if (dif <= 0) {
        setTempo({ d: "00", h: "00", m: "00", s: "00", acabou: true, pronto: true });
        return false;
      }
      const seg = Math.floor(dif / 1000);
      setTempo({
        d: pad(Math.floor(seg / 86400)),
        h: pad(Math.floor((seg % 86400) / 3600)),
        m: pad(Math.floor((seg % 3600) / 60)),
        s: pad(seg % 60),
        acabou: false,
        pronto: true,
      });
      return true;
    };

    tick();
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [dataISO]);

  return tempo;
}
