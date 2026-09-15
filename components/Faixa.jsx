const NICHOS = [
  "Espetinho", "Marmita", "Lanche", "Bolo", "Brigadeiro", "Salgado",
  "Açaí", "Doces", "Encomenda", "Barraca", "Trailer", "Delivery",
];

export default function Faixa() {
  return (
    <div className="faixa" aria-hidden="true">
      <div className="faixa-int">
        {[...NICHOS, ...NICHOS].map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </div>
    </div>
  );
}
