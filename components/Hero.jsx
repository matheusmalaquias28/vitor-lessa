import Botao from "./Botao";
import { DATA_LABEL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="selo he" data-i="1">
            <span className="pt" /> Online e ao vivo · {DATA_LABEL}, 19h
          </div>

          <h1 className="he" data-i="2">
            Você trabalha o dia inteiro. O dinheiro entra. Mas o negócio está <em>te pagando</em>?
          </h1>

          <p className="lead he" data-i="3">
            Se você vende comida, compra ingrediente, paga conta, produz, vende, e no fim do mês ainda fica sem saber
            quanto ganhou, <b>essa imersão foi feita para você.</b>
          </p>

          <p className="lead he" data-i="4" style={{ marginTop: 14 }}>
            Em 2 horas com <b>Vitor Lessa</b>, que começou vendendo espetinho na rua e hoje tem restaurante e fábrica
            própria, você vai entender quanto sobra em cada produto, organizar as compras, montar ofertas mais
            inteligentes e decidir com clareza.
          </p>

          <Botao className="he" data-i="6">
            Quero participar da imersão
          </Botao>
        </div>
      </div>
    </section>
  );
}
