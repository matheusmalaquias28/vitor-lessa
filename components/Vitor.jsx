const LINHA = [
  {
    marco: "2010",
    texto: "Vitor Lessa começa a vender espetinho na porta de um supermercado. Ali nasce o Rei do Churrasquinho.",
  },
  {
    marco: "O CRESCIMENTO",
    texto:
      "Comprar, produzir, vender, fazer conta, reinvestir, errar e aprender. Com o tempo vieram o restaurante e a fábrica própria de espetinhos.",
  },
  {
    marco: "A CRISE",
    texto: "Durante a pandemia, precisou dispensar a equipe e contar com a família para manter a operação funcionando.",
  },
  {
    marco: "HOJE",
    texto:
      "A experiência dele não vem de estudar negócios de fora. Vem de ter vivido o carrinho, a expansão, a crise e a necessidade de reorganizar tudo.",
  },
];

export default function Vitor() {
  return (
    <section className="sec dark">
      <div className="wrap bio-grid">
        <div className="rv">
          <div className="fotos">
            <img src="/lessa-old-1.jpg" alt="Vitor Lessa no início da trajetória, vendendo espetinho" />
            <img src="/vitor-lessa-passado (2).jpg" alt="Vitor Lessa em sua trajetória" />
            <img src="/vitor-lessa-passado (3).jpg" alt="Vitor Lessa em sua trajetória" />
          </div>
        </div>

        <div className="rv" data-d="1">
          <h2 className="larga">
            Quem conduz a imersão começou onde muita gente começa: um carrinho na porta do mercado.
          </h2>
          <ul className="linha-tempo">
            {LINHA.map((item) => (
              <li key={item.marco}>
                <b>{item.marco}</b>
                <p>{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
