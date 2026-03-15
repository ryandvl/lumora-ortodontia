import {
  ClockCheckIcon,
  PhoneCallIcon,
  SmileIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

import { Header } from "@/components/header";
import { fadeAnimation } from "@/utils/animations";

import Photo from "@/public/apresentação.png";

export default function Home() {
  return (
    <div className="h-full">
      <div className="relative rounded-4xl bg-slate-50 overflow-hidden w-full h-full p-4 px-8 flex flex-col gap-40">
        <div className="absolute -top-120 -left-130 w-400 h-250 bg-blue-100 rounded-full z-0"></div>
        <div className="absolute -bottom-130 -right-130 w-250 h-250 bg-blue-400 rounded-full z-0"></div>

        <Header />

        <div className="relative z-10 px-12">
          <div className="flex flex-col gap-16 w-fit">
            <div>
              <span className="text-indigo-500 font-extrabold text-6xl">
                {fadeAnimation("Rapidez e precisão em")}
              </span>
              <br />
              <span className="text-indigo-500 font-extrabold text-6xl">
                {fadeAnimation("cada tratamento", 4)}
              </span>

              <div className="w-fit" />
            </div>

            <span className="text-slate-500 text-xl animate-[fade2_1.5s_ease_0.1s_forwards] inline-block">
              Com segurança e tecnologia de ponta que transforma seu sorriso.
              <br />
              Priorizamos acompanhamento continuo e preços acessíveis.
            </span>

            <div className="flex flex-col justify-center items-center gap-20">
              <button className="rounded-2xl bg-blue-500 p-4 px-10 flex items-center gap-2 cursor-pointer">
                <PhoneCallIcon className="text-blue-200" size={22} />
                <span className="text-blue-50 font-semibold">
                  Entrar em Contato
                </span>
              </button>

              <div className="bg-slate-100 w-fit h-fit rounded-2xl flex flex-col gap-2 items-center justify-center p-4 shadow animate-fade">
                <span className="text-zinc-900 font-bold text-xl">
                  Avaliação Máxima <span className="text-zinc-950">(</span>5.0
                  <span className="text-zinc-950">)</span>
                </span>
                <div className="flex gap-1">
                  <StarIcon fill="#fcd34d" stroke="#fcd34d" />
                  <StarIcon fill="#fcd34d" stroke="#fcd34d" />
                  <StarIcon fill="#fcd34d" stroke="#fcd34d" />
                  <StarIcon fill="#fcd34d" stroke="#fcd34d" />
                  <StarIcon fill="#fcd34d" stroke="#fcd34d" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-50 -top-20">
            <svg
              className="absolute -left-10 -bottom-10 size-16 select-none"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5H3C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3V1"
                stroke="#dbeafe"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="absolute -right-10 -top-10 size-16 select-none"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H3C3.53043 1 4.03914 1.21071 4.41421 1.58579C4.78929 1.96086 5 2.46957 5 3V5"
                stroke="#dbeafe"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative">
              <SmileIcon className="absolute size-20 -right-40 top-10 p-2 text-blue-50 bg-blue-400 rounded-full animate-fade" />
              <ClockCheckIcon className="absolute size-18 -left-60 top-40 p-2 text-blue-50 bg-indigo-400 rounded-full animate-fade" />
            </div>

            <Image
              src={Photo}
              alt="Criança e adulto sorrindo juntos representando a felicidade da Lumora Ortodontia"
              width={Photo.width / 3}
              height={Photo.height / 3}
              className="rounded-4xl shadow-2xl animate-fade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
