import Image from "next/image";

import { Header } from "@/components/header";

import LumoraLogo from "@/public/lumora-logo.jpeg";
import Organograma from "@/public/organograma.jpeg";

export default function AboutUs() {
  return (
    <div className="relative rounded-4xl bg-slate-50 w-full h-fit p-4 px-8 pb-90 flex flex-col gap-40">
      <Header page="sobre-nos" />

      <div className="flex items-center justify-center flex-col gap-4 bg-blue-50 p-6 rounded-full">
        <span className="text-sky-600 text-5xl font-extrabold animate-fade">
          SOBRE NÓS
        </span>

        <span className="text-sky-800 text-xl text-center max-w-150 animate-fade">
          A Lumora é uma clínica odontológica focada em ortodontia.
          <br />
          Com uma tecnologia de ponta, nosso propósito é iluminar sorrisos por
          meio de tratamentos personalizados, aliando saúde bucal, estética e
          bem estar.
          <br />
          <br />
          Nos atentando à necessidade de cada paciente, transformamos sua
          jornada ortodontica em uma experiência única e confiável.
        </span>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <span className="text-blue-700 font-extrabold text-5xl animate-fade">
          Fundação da Empresa
        </span>

        <div className="flex items-center gap-20">
          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-1/3 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl animate-fade">
              Nome e identidade visual
            </span>
            <span className="text-zinc-900">
              <span className="text-zinc-950 font-bold">Nome</span>: Lumora
              Ortodontia
              <br />
              <br />
              <span className="text-zinc-950 font-bold">Identidade visual</span>
              : Foi construída a partir da cor azul, escolhida por transmitir
              confiança, segurança e profissionalismo — valores essenciais na
              área da saúde. Além disso, o azul está associado à tranquilidade e
              ao cuidado, ajudando a criar um ambiente mais acolhedor para os
              pacientes. Dessa forma, a cor reforça a credibilidade da clínica e
              contribui para uma experiência mais confortável durante o
              atendimento.
            </span>
          </div>
          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-1/2 min-h-80 flex gap-8 shadow animate-fade2">
            <div className="flex flex-col gap-4">
              <span className="text-blue-500 font-bold text-3xl">Logotipo</span>
              <span className="text-zinc-900">
                O logotipo da Lumora foi desenvolvido com elementos que
                representam cuidado, saúde e estética odontológica.
                <br />
                <br />O símbolo do dente, aliado aos instrumentos odontológicos
                e à cor azul, transmite confiança, profissionalismo e o
                compromisso da clínica em proporcionar sorrisos saudáveis e
                bonitos.
              </span>
            </div>

            <Image
              src={LumoraLogo}
              alt="Logotipo da Lumora Ortodontia"
              width={LumoraLogo.width / 2}
              height={LumoraLogo.height / 2}
              className="shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <span className="text-blue-700 font-extrabold text-5xl animate-fade">
          Missão, visão e valores
        </span>

        <div className="flex items-center gap-20">
          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-120 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl">Missão</span>
            <span className="text-zinc-900">
              Cuidar da saúde bucal com carinho, atenção e responsabilidade,
              oferecendo um atendimento humanizado que respeita a
              individualidade de cada paciente e transforma sorrisos com amor e
              dedicação.
            </span>
          </div>

          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-120 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl">Visão</span>
            <span className="text-zinc-900">
              Ser referência em ortodontia na região, reconhecida não apenas
              pela excelência técnica e resultados harmoniosos, mas pelo
              acolhimento, confiança e vínculo construído com cada paciente e
              sua família.
            </span>
          </div>

          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-120 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl">Valores</span>
            <span className="text-zinc-900">
              Individualidade; ética e transparencia; tecnologia com
              humanização; confiança e parceria.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <span className="text-blue-700 font-extrabold text-5xl animate-fade">
          Proposta de valor e Público-alvo
        </span>

        <div className="flex items-center gap-20">
          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-120 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl">
              Proposta de valor
            </span>
            <span className="text-zinc-900">
              A empresa é especializada em tratamentos ortodônticos, com foco na
              correção do alinhamento dos dentes e da mordida, promovendo saúde
              bucal, estética e bem-estar aos pacientes.
              <br />
              <br />A clínica utiliza tecnologia moderna para diagnóstico, com
              exames de imagem e planejamento digital do sorriso. Nosso objetivo
              é proporcionar um sorriso alinhado, funcional e saudável,
              aumentando a autoestima e a qualidade de vida dos pacientes.
            </span>
          </div>

          <div className="bg-zinc-100 p-4 rounded-2xl w-fit max-w-120 min-h-80 flex flex-col gap-4 shadow animate-fade2">
            <span className="text-blue-500 font-bold text-3xl">
              Público-alvo
            </span>
            <span className="text-zinc-900">
              Crianças, adolescentes, jovens e adultos.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <span className="text-blue-700 font-extrabold text-5xl animate-fade">
          Organograma
        </span>

        <Image
          src={Organograma}
          alt="organograma"
          width={Organograma.width / 2}
          height={Organograma.height / 2}
        />
      </div>
    </div>
  );
}
