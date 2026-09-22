import Image from "next/image";
import Botao from "./Botao";

const MODULOS = [
  {
    titulo: "Descubra quanto realmente sobra em cada produto",
    texto:
      "O que precisa entrar no custo de um produto e como usar essas informações para analisar seu preço: ingredientes, embalagem, rendimento, custos e margem. Você também vai entender por que misturar o dinheiro de casa com o do negócio impede de enxergar o resultado real das vendas.",
    pratica: "calcular o custo e o preço de um dos seus produtos durante a aula.",
  },
  {
    titulo: "Pare de deixar dinheiro parado em mercadoria",
    texto:
      "Comprar mais barato parece sempre uma boa decisão, mas quantidade, validade, produção e dinheiro disponível também entram na conta. Quanto comprar, quando comprar, como avaliar fornecedores e como planejar a produção para reduzir sobras.",
    pratica: "identificar um ajuste nas suas compras para colocar em teste.",
  },
  {
    titulo: "Crie ofertas que fazem sentido para o cliente e para o seu caixa",
    texto:
      "Combo não é juntar produtos e baixar o preço. Uma oferta precisa ser interessante para quem compra e continuar fazendo sentido para quem vende. Combinações, adicionais, apresentação e oportunidades de aumentar o valor da venda sem sair dando desconto.",
    pratica: "montar um combo para testar no seu negócio.",
  },
  {
    titulo: "Faça quem já comprou lembrar de você na próxima compra",
    texto:
      "Conseguir cliente novo dá trabalho. Quem já comprou precisa lembrar que o seu negócio existe. Formas simples de apresentar melhor seus produtos no WhatsApp e no Instagram, facilitar pedidos e manter contato com quem já conhece o seu trabalho.",
    pratica: "produzir uma foto do seu produto e preparar uma publicação.",
  },
];

export default function Modulos() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <div className="rv">
          <h2 className="larga">Quatro áreas que se encontram todos os dias no seu caixa.</h2>
          <p className="lead" style={{ marginTop: 20, maxWidth: "58ch" }}>
            Custos, compras, ofertas e divulgação. E você não fica só ouvindo teoria: os exercícios usam situações do
            seu próprio negócio.
          </p>
        </div>

        <div className="mods">
          {MODULOS.map((m, i) => (
            <article className="mod rv" key={m.titulo}>
              <div className="mod-n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
                <div className="pratica">
                  <b>Na prática:</b> {m.pratica}
                </div>
              </div>
              <Image
                className="mod-foto"
                src={`/item-0${i + 1}.webp`}
                alt={m.titulo}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1000px) 100vw, 290px"
              />
            </article>
          ))}
        </div>

        <div className="mods-cta rv">
          <Botao>Quero participar da imersão</Botao>
        </div>
      </div>
    </section>
  );
}
