"use client";

import { useEffect, useState } from "react";
import { Fogo } from "./Icone";
import { useContagem } from "@/lib/useContagem";
import { DATA_EVENTO, LINK_INGRESSO } from "@/lib/config";

function Caixa({ valor, rotulo, destaque = false }) {
  return (
    <div className={`cx ${destaque ? "bate" : ""}`.trim()}>
      <b>{valor}</b>
      <i>{rotulo}</i>
    </div>
  );
}

export default function Header() {
  const { d, h, m, acabou, pronto } = useContagem(DATA_EVENTO);

  // No mobile o header fica fixo embaixo e só aparece ao rolar para cima.
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let ultimoY = window.scrollY;
    const aoRolar = () => {
      const y = window.scrollY;
      if (y < ultimoY - 4) setVisivel(true);
      else if (y > ultimoY + 4) setVisivel(false);
      ultimoY = y;
    };
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className={visivel ? "header--visivel" : "header--oculto"}>
      <div className="wrap hd">
        <div className="marca">
          <Fogo className="fogo" />
          <b>
            Faça Sua Venda Render
            <i>Imersão com Vitor Lessa</i>
          </b>
        </div>

        <div className="cron">
          <div className="rot">{acabou ? "Ao vivo agora" : "Começa em"}</div>
          <div className="caixas" aria-label="Tempo restante para a imersão">
            <Caixa valor={d} rotulo="DIAS" />
            <Caixa valor={h} rotulo="HORAS" />
            <Caixa valor={m} rotulo="MIN" destaque={pronto && !acabou && Number(m) % 2 === 0} />
          </div>
        </div>

        <a href={LINK_INGRESSO} className="btn">
          <span>Garantir vaga</span>
        </a>
      </div>
    </header>
  );
}
