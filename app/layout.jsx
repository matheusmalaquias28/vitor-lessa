import Script from "next/script";
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
  formatDetection: { telephone: false, date: false },
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
      <head>
        <Script id="meta-pixel" strategy="beforeInteractive">{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1714141899883227');
fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1714141899883227&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
