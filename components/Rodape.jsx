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
          <a href="#">Suporte</a>
        </nav>
      </div>
    </footer>
  );
}
