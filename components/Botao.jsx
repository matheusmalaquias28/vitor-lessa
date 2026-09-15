import { Seta } from "./Icone";
import { LINK_INGRESSO } from "@/lib/config";

export default function Botao({ children, grande = false, href = LINK_INGRESSO, comSeta = true, className = "", ...rest }) {
  return (
    <a href={href} className={`btn ${grande ? "btn--g" : ""} ${className}`.trim()} {...rest}>
      <span>{children}</span>
      {comSeta && <Seta size={grande ? 19 : 18} />}
    </a>
  );
}
