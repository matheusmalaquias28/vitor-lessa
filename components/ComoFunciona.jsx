import { Calendario, Relogio, Celular, Balao, Lapis } from "./Icone";
import { DATA_LABEL } from "@/lib/config";

export default function ComoFunciona() {
  const cards = [
    {
      icone: <Calendario size={19} />,
      titulo: "Encontro online e ao vivo",
      texto: `Dia ${DATA_LABEL}, das 19h às 21h (horário de Brasília), pela plataforma Google Meet.`,
    },
    {
      icone: <Relogio size={19} />,
      titulo: "Duas horas de conteúdo e exercícios",
      texto: "Reserve esse período para acompanhar a aula e trabalhar as orientações no seu negócio.",
    },
    {
      icone: <Celular />,
      titulo: "Pelo celular ou pelo computador",
      texto: "Depois da confirmação da inscrição, você recebe as instruções de acesso por um grupo no WhatsApp.",
    },
    {
      icone: <Balao />,
      titulo: "Espaço para perguntas",
      texto:
        "Você poderá enviar perguntas durante o encontro. Vitor responde conforme o tempo disponível. Não inclui consultoria individual.",
    },
  ];

  return (
    <section className="sec papel como-funciona">
      <div className="wrap">
        <div className="rv">
          <h2 className="larga">Como vai funcionar</h2>
        </div>

        <div className="como">
          {cards.map((c, i) => (
            <article className="rv" data-d={String(i)} key={c.titulo}>
              <div className="ic">{c.icone}</div>
              <h4>{c.titulo}</h4>
              <p>{c.texto}</p>
            </article>
          ))}
        </div>

        
     
      </div>
    </section>
  );
}
