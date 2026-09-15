export default function ErroPequeno() {
  return (
    <section className="sec dark" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="wrap rv" style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0 auto 20px", maxWidth: "24ch" }}>Quanto um erro pequeno custa no fim do mês?</h2>
        <p className="lead" style={{ margin: "0 auto 26px", maxWidth: "56ch" }}>
          Erre o cálculo de um produto em apenas R$1. Venda 30 unidades por dia. São R$30 por dia, cerca de{" "}
          <strong style={{ color: "var(--brasa)" }}>R$900 em 30 dias</strong>.
        </p>
        <p style={{ margin: "0 auto", maxWidth: "56ch", fontSize: ".95rem", color: "#8D877F" }}>
          Isso não significa que esse seja o seu caso. Mostra como decisões pequenas, repetidas todos os dias, pesam no
          resultado. Às vezes corrigir uma decisão vale mais do que tentar vender mais.
        </p>
      </div>
    </section>
  );
}
