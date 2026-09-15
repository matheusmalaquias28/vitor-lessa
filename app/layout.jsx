import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--fonte",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--fonte-mono",
});

export const metadata = {
  title: "Imersão Faça Sua Venda Render com Vitor Lessa",
  description:
    "Imersão online e ao vivo de 2 horas para quem vende comida: custos, preço, compras, ofertas e divulgação. Dia 15/10, das 19h às 21h.",
  openGraph: {
    title: "Imersão Faça Sua Venda Render com Vitor Lessa",
    description:
      "Em 2 horas, entenda quanto sobra em cada produto, organize suas compras e monte ofertas que fazem sentido no seu caixa.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#121110",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
