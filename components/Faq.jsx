"use client";

import { useState } from "react";
import { WPP_DISPLAY, LINK_WHATSAPP_SUPORTE } from "@/lib/config";

const PERGUNTAS = [
  {
    p: "Eu vendo na rua. Essa imersão é para mim?",
    r: "Sim. A imersão foi pensada considerando a realidade de pequenos negócios de alimentação. O conteúdo serve para quem vende na rua, em casa, por encomenda, por delivery ou no próprio ponto.",
  },
  {
    p: "Meu negócio é pequeno e eu não entendo de financeiro. Vou conseguir acompanhar?",
    r: "Sim. Você não precisa ter uma grande empresa nem entender de finanças. A proposta é trabalhar conceitos práticos usando informações que você já tem no dia a dia: o que compra, o que produz, o que vende e quanto cobra.",
  },
  {
    p: "Eu vou aprender receitas?",
    r: "Não. A imersão não é uma aula de culinária. O foco é a gestão e a venda dos seus produtos: custos, preço, compras, ofertas e divulgação.",
  },
  {
    p: "Vou aprender a calcular o preço dos meus produtos?",
    r: "Você vai aprender quais informações precisam entrar nessa decisão e como analisar melhor custos e preços. Durante a imersão há um exercício usando um produto do seu próprio negócio.",
  },
  {
    p: "Em duas horas vou resolver todos os problemas do meu negócio?",
    r: "Não existe aula capaz de resolver todos os desafios de uma empresa em duas horas. A proposta é identificar problemas, entender melhor algumas decisões e sair com próximos passos organizados. O resultado depois depende de como você aplicar. Mas a expectativa é que você termine enxergando o seu negócio de forma muito mais clara.",
  },
  {
    p: "E se eu não puder assistir ao vivo?",
    r: "Você pode adicionar a gravação completa por R$27 no momento da inscrição. Ela é disponibilizada em até [PRAZO] após a imersão e fica disponível por [PERÍODO].",
  },
  {
    p: "Posso tirar dúvidas sobre o meu negócio?",
    r: "Você poderá enviar perguntas durante o encontro. Vitor responde as dúvidas relacionadas ao conteúdo conforme o tempo disponível. A participação não inclui consultoria individual.",
  },
  {
    p: "Como recebo meu acesso?",
    r: (
      <>
        Depois da confirmação do pagamento, você recebe as instruções por um grupo no WhatsApp. Se tiver algum
        problema, é só falar com o suporte no WhatsApp{" "}
        <a href={LINK_WHATSAPP_SUPORTE} target="_blank" rel="noopener noreferrer">
          {WPP_DISPLAY}
        </a>
        .
      </>
    ),
  },
  {
    p: "Quais são as condições de cancelamento e reembolso?",
    r: "A compra é feita pela Hotmart. Você pode solicitar o reembolso em até 7 dias após a compra, direto pela própria plataforma Hotmart, conforme a política de garantia vigente.",
  },
];

export default function Faq() {
  // Uma pergunta aberta por vez.
  const [aberta, setAberta] = useState(null);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="rv" style={{ textAlign: "center" }}>
          <h2 style={{ margin: "0 auto" }}>Tire suas dúvidas antes de se inscrever</h2>
        </div>

        <div className="faq rv" data-d="1">
          {PERGUNTAS.map((item, i) => (
            <details
              key={item.p}
              open={aberta === i}
              onToggle={(e) => {
                if (e.currentTarget.open) setAberta(i);
                else if (aberta === i) setAberta(null);
              }}
            >
              <summary>{item.p}</summary>
              <div className="resp">
                <p>{item.r}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
