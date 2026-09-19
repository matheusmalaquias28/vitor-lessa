import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Faixa from "@/components/Faixa";
import Problema from "@/components/Problema";
import Custo from "@/components/Custo";
import Modulos from "@/components/Modulos";
import Entregaveis from "@/components/Entregaveis";
import ErroPequeno from "@/components/ErroPequeno";
import ParaQuem from "@/components/ParaQuem";
import Vitor from "@/components/Vitor";
import ComoFunciona from "@/components/ComoFunciona";
import Ingresso from "@/components/Ingresso";
import Faq from "@/components/Faq";
import Fechamento from "@/components/Fechamento";
import Rodape from "@/components/Rodape";
import Reveal from "@/components/Reveal";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

export default function Page() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Faixa />
        <Problema />
        <Custo />
        <Modulos />
        <Entregaveis />
        <ErroPequeno />
        <ParaQuem />
        <Vitor />
        <ComoFunciona />
        <Ingresso />
        <Faq />
        <Fechamento />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  );
}
