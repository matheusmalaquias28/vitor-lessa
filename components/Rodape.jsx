import { WPP_DISPLAY, LINK_WHATSAPP_SUPORTE } from "@/lib/config";

export default function Rodape() {
  return (
    <footer>
      <div className="wrap ft">
        <div>
          VITOR LESSA
          <br />© {new Date().getFullYear()} · Imersão Faça Sua Venda Render
        </div>
        <nav>
          <a href="#">Termos de compra</a>
          <a href="#">Política de privacidade</a>
          <a href={LINK_WHATSAPP_SUPORTE} target="_blank" rel="noopener noreferrer">
            Suporte {WPP_DISPLAY}
          </a>
        </nav>
      </div>
    </footer>
  );
}
