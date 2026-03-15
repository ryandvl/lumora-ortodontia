import Image from "next/image";

import { Header } from "@/components/header";
import { fadeAnimation } from "@/utils/animations";

import Photo from "@/public/apresentação.png";

export default function Home() {
  return (
    <div>
      <div className="relative rounded-4xl bg-slate-50 overflow-hidden w-full h-200 p-4 px-8 flex flex-col gap-40">
        <div className="absolute -top-120 -left-130 w-400 h-250 bg-blue-100 rounded-full z-0"></div>
        <div className="absolute -bottom-130 -right-130 w-250 h-250 bg-blue-400 rounded-full z-0"></div>

        <Header />

        <div className="relative z-10 px-12">
          <span className="text-indigo-500 font-extrabold text-6xl">
            {fadeAnimation("Rapidez e precisão em")}
          </span>
          <br />
          <span className="text-indigo-500 font-extrabold text-6xl">
            {fadeAnimation("cada tratamento", 4)}
          </span>

          <div className="absolute right-50 -top-20">
            <svg
              className="absolute -left-10 -bottom-10 size-16 select-none opacity-20"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5H3C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3V1"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="absolute -right-10 -top-10 size-16 select-none opacity-20"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H3C3.53043 1 4.03914 1.21071 4.41421 1.58579C4.78929 1.96086 5 2.46957 5 3V5"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Image
              src={Photo}
              alt="Criança e adulto sorrindo juntos representando a felicidade da Lumora Ortodontia"
              width={Photo.width / 3}
              height={Photo.height / 3}
              className="rounded-4xl shadow-2xl opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
