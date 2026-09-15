const NICHOS = [
  "Espetinho", "Marmita", "Lanche", "Bolo", "Brigadeiro", "Salgado", "Açaí",
  "Doces", "Comida por encomenda", "Barraca", "Trailer", "Delivery", "Restaurante pequeno",
];

export default function ParaQuem() {
  return (
    <section className="sec">
      <div className="wrap duas">
        <div className="rv">
          <h2>Para quem vende comida e está dentro da rotina do próprio negócio.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            Você não precisa ter equipe, restaurante, estrutura grande ou entender de finanças. Precisa ter uma rotina
            de vendas e querer entender melhor o que acontece com o dinheiro.
          </p>
          
        </div>

        <div className="rv" data-d="1">
          <div className="chips">
            {NICHOS.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="aviso">
            <b>Ainda não começou a vender?</b> Você também pode participar. Mas os exercícios serão mais úteis para quem
            já tem produto, custos e uma rotina real para analisar.
          </div>
        </div>
      </div>
    </section>
  );
}
