import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Modulos from "@/components/Modulos";
import Vitor from "@/components/Vitor";
import Ingresso from "@/components/Ingresso";
import Faq from "@/components/Faq";
import Rodape from "@/components/Rodape";
import Reveal from "@/components/Reveal";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

// Versão enxuta da landing page: só as seções essenciais para a decisão de compra.
export default function PageV2() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Problema />
        <Modulos />
        <Vitor />
        <Ingresso />
        <Faq />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  );
}
