const CUSTOS = [
  "Ingredientes",
  "Embalagem",
  "Gás e energia",
  "Taxas e maquininha",
  "Perdas e desperdício",
  "Parte das despesas do negócio",
];

const FATIAS = [
  { largura: "22%", cor: "#2A1200" },
  { largura: "16%", cor: "#5A2A0A" },
  { largura: "14%", cor: "#8B4518" },
  { largura: "14%", cor: "#C47A3A" },
  { largura: "14%", cor: "#E8C4A0" },
  { largura: "20%", cor: "#fff" },
];

const PERGUNTAS = [
  "Posso dar desconto?",
  "Esse combo vale a pena?",
  "Esse fornecedor está mais barato?",
  "Quanto eu posso tirar para mim?",
];

export default function Custo() {
  return (
    <section className="sec papel">
      <div className="wrap duas">
        <div className="rv">
          <h2 className="larga">Antes de vender mais, entenda o que cada venda deixa.</h2>
          <p className="lead" style={{ marginTop: 22 }}>
            Imagine um produto vendido por R$15.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            Esses R$15 ainda precisam pagar ingrediente, embalagem, gás, energia, taxa, perda e desperdício.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            Uma parte também precisa cobrir as despesas do negócio e permitir que você compre de novo.
          </p>
          <p className="pergunta">O valor que o cliente paga não é o valor que você pode levar para casa.</p>
          <p className="lead">Quando essa conta não está clara, fica difícil responder coisas simples:</p>
          <div className="perguntas-cx">
            {PERGUNTAS.map((p) => (
              <div key={p}>{p}</div>
            ))}
          </div>
        </div>

        <div className="rv" data-d="1">
          <div className="nota">
            <div className="nota-top">
              <i>O QUE O CLIENTE PAGA</i>
              <b>R$ 15,00</b>
            </div>

            <p className="nota-rot">O que é descontado de você, e você não controla:</p>

            <ul>
              {CUSTOS.map((c) => (
                <li key={c}>
                  <span>{c}</span>
                  <span>R$ ?</span>
                </li>
              ))}
            </ul>

            <div className="barra-quebra" aria-hidden="true">
              {FATIAS.map((f, i) => (
                <i
                  key={i}
                  style={{ width: f.largura, background: f.cor, transitionDelay: `${0.15 + i * 0.1}s` }}
                />
              ))}
            </div>

            <div className="nota-fim">
              <strong>O que realmente fica com você =</strong>
              <em>?</em>
            </div>

            <p className="nota-nota">
              Exemplo ilustrativo. Na imersão, você faz essa conta com um produto do seu próprio negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
