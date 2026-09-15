import { Imagem } from "./Icone";

/**
 * Espaço reservado para imagem.
 * Troque por <Image src="/img/arquivo.jpg" .../> quando as fotos chegarem.
 */
export default function Placeholder({ linhas = [], className = "", comIcone = false, children }) {
  return (
    <div className={`ph ${className}`} aria-hidden="true">
      {comIcone && <Imagem />}
      <span>
        {linhas.map((linha, i) => (
          <span key={i} style={{ display: "block" }}>
            {linha}
          </span>
        ))}
      </span>
      {children}
    </div>
  );
}
