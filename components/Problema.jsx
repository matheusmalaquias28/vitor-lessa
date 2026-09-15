const DORES = [
  "Você olha o preço do concorrente para decidir quanto cobrar.",
  "Não sabe exatamente quanto sobra em cada produto vendido.",
  "Vende bem em alguns dias, mas continua sem dinheiro para a próxima compra.",
  "Compra em quantidade para economizar e fica com produto parado.",
  "Mistura o dinheiro das vendas com as despesas de casa.",
  "Trabalha todo dia, mas nunca consegue formar caixa.",
  "Dá desconto sem saber se ainda está ganhando.",
  "Quer crescer, mas sente que precisa primeiro colocar a casa em ordem.",
];

export default function Problema() {
  return (
    <section className="sec">
      <div className="wrap duas">
        <div className="rv">
          <h2>Você vende, compra, produz, paga contas. E o dinheiro some.</h2>
          <p className="lead" style={{ marginTop: 22 }}>
            Quem vê o movimento pensa que está sobrando dinheiro. Mas você conhece o outro lado: o ingrediente subiu,
            parte da produção não vendeu, e o que entrou já tem destino: a próxima compra.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            No meio disso, tem as contas de casa. Você tira um pouco do caixa, depois devolve para comprar mercadoria.
            Quando o mês fecha, sobra uma pergunta difícil:
          </p>
          <p className="pergunta">Meu negócio está me dando lucro ou eu só estou fazendo o dinheiro circular?</p>
        </div>

        <div className="rv" data-d="1">
          <ul className="dores">
            {DORES.map((dor, i) => (
              <li key={i}>
                <b>{String(i + 1).padStart(2, "0")}</b> {dor}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 22, fontSize: ".98rem", color: "var(--texto-suave)" }}>
            Se você se identificou, o problema provavelmente não é falta de esforço. É falta de clareza para decidir.
          </p>
        </div>
      </div>
    </section>
  );
}
