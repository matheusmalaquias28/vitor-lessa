"use client";

import { useEffect, useRef } from "react";
import Botao from "./Botao";
import { Check, Escudo, Cadeado } from "./Icone";
import {
  DATA_CURTA, DIA_SEMANA, HORARIO, FUSO,
  PRECO, PRECO_ANTIGO, LINK_CHECKOUT,
} from "@/lib/config";

const INCLUI = [
  "Duas horas de imersão online e ao vivo com Vitor Lessa",
  "Conteúdo sobre custos, preço, compras, vendas e divulgação",
  "Exercícios com situações do seu próprio negócio",
  "Espaço para enviar perguntas durante o encontro",
  "Plano de ação para os próximos 30, 60 e 90 dias",
];

export default function Ingresso() {
  const ingressoRef = useRef(null);
  const canhotoRef = useRef(null);

  // Mantém os recortes circulares alinhados com a linha do picote,
  // mesmo quando o texto quebra em telas diferentes.
  useEffect(() => {
    const posicionar = () => {
      if (ingressoRef.current && canhotoRef.current) {
        ingressoRef.current.style.setProperty("--corte", `${canhotoRef.current.offsetTop}px`);
      }
    };

    posicionar();
    window.addEventListener("resize", posicionar);
    if (document.fonts?.ready) document.fonts.ready.then(posicionar);

    return () => window.removeEventListener("resize", posicionar);
  }, []);

  return (
    <section className="sec-preco" id="ingresso">
      <div className="wrap">
        <div className="cabeca-preco rv">
          <h2>Garanta seu lugar na imersão</h2>
          <p className="lead">Um pagamento único. Duas horas ao vivo com o Vitor.</p>
        </div>

        <div className="ingresso rv" data-d="1" ref={ingressoRef}>
          <div className="ing-topo">
            <div>
              <div className="t">IMERSÃO ONLINE E AO VIVO</div>
              <b>Faça Sua Venda Render</b>
            </div>
            <div className="ing-serie">
              ADMISSÃO ÚNICA
              <br />
              Nº 0097 · VL-2026
            </div>
          </div>

          <div className="ing-corpo">
            <div className="ing-quando">
              <div>
                <i>DATA</i>
                <b>
                  {DATA_CURTA} <small>{DIA_SEMANA}</small>
                </b>
              </div>
              <div>
                <i>HORÁRIO</i>
                <b>
                  {HORARIO} 
                </b>
              </div>
            </div>

            <ul className="ing-itens">
              {INCLUI.map((item) => (
                <li key={item}>
                  <Check size={17} largura={2.6} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="ing-preco">
              <div className="antes">
                de <s>{PRECO_ANTIGO}</s> por
              </div>
              <div className="agora">
                <span className="cifra">R$</span>
                <span className="num">{PRECO}</span>
              </div>
              <p className="parcelas">ou 4x de R$26,40</p>
              <p className="pag">À VISTA · PAGAMENTO ÚNICO</p>
            </div>

            <Botao grande href={LINK_CHECKOUT}>Quero participar</Botao>

            <div className="ing-seguro">
              <span>
                <Escudo /> Compra segura Hotmart
              </span>
              <span>
                <Cadeado /> Dados protegidos
              </span>
              
            </div>
          </div>

          <div className="ing-canhoto" ref={canhotoRef}>
            <div className="info">
              <b>ONLINE · AO VIVO · 2 HORAS</b>
              ACESSO ENVIADO POR GRUPO NO WHATSAPP
              <br />
              INSCRIÇÕES ATÉ 15/10, 19H
            </div>
            <div className="codigo">
              <div className="barras" aria-hidden="true" />
              <small>VL 15 10 26 097</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
