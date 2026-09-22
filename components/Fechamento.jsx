import Botao from "./Botao";
import { DATA_CURTA } from "@/lib/config";

const RECAP = [`${DATA_CURTA} · 19H ÀS 21H`, "ONLINE E AO VIVO", "2 HORAS", "R$97 À VISTA"];

export default function Fechamento() {
  return (
    <section className="sec dark">
      <div className="wrap fechar rv">
        <h2>Você não precisa esperar o negócio crescer para entender seus números.</h2>
        <p className="lead">
          Na próxima compra. No próximo preço. No próximo desconto. Na próxima vez que o dinheiro entrar no caixa.
        </p>
        <p className="lead">
          Você pode continuar decidindo no improviso, ou começar a entender o que cada decisão está fazendo com o
          dinheiro do seu negócio.
        </p>

        <div className="recap">
          {RECAP.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>

        <Botao grande>Quero fazer minha venda render</Botao>
        <p className="sob-btn">Inscrições abertas até {DATA_CURTA}, às 19h.</p>
      </div>
    </section>
  );
}
