import { Check } from "./Icone";
import Botao from "./Botao";

const ITENS = [
  "O custo de um produto seu, mais claro",
  "Uma análise do seu preço atual",
  "Um ajuste para as próximas compras",
  "Uma oferta ou combo para testar",
  "Uma ação de divulgação preparada",
  "Plano de ação para 30, 60 e 90 dias",
];

export default function Entregaveis() {
  return (
    <section className="sec papel entregaveis">
      <div className="wrap">
        <div className="rv saida-intro">
          <h2 className="larga">Em 2 horas, você sai da aula com isso pronto.</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Não é transformar o negócio inteiro numa tarde. É parar de decidir no escuro.
          </p>
        </div>

        <div className="saida">
          {ITENS.map((item, i) => (
            <div className="rv" data-d={String(i % 3)} key={item}>
              <Check />
              <b>{item}</b>
            </div>
          ))}
        </div>

        <div className="saida-cta rv">
          <Botao>Quero participar da imersão</Botao>
        </div>
      </div>
    </section>
  );
}
