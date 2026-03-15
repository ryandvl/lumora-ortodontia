import Image from "next/image";

import { robotoFont } from "@/app/layout";
import Logo from "@/public/logo.png";
import { HomeIcon, InfoIcon, PhoneCallIcon, UserStarIcon } from "lucide-react";

export function Header() {
  return (
    <div className="relative z-10 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Logo da Lumora Ortodontia"
          width={80}
          height={80}
        />

        <span
          className={`text-sky-700 font-bold text-3xl ${robotoFont.variable}`}
        >
          Lumora Ortodontia
        </span>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center gap-10">
          <button
            className="relative flex items-center justify-center gap-2 cursor-pointer px-2
          after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-slate-950
          after:animate-underline
          "
          >
            <HomeIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Início</span>
          </button>

          <button
            className="relative flex items-center justify-center gap-2 cursor-pointer px-2
          after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-slate-950 after:transition-all after:duration-300 hover:after:w-full
          "
          >
            <UserStarIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Serviços</span>
          </button>

          <button
            className="relative flex items-center justify-center gap-2 cursor-pointer px-2
          after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-slate-950 after:transition-all after:duration-300 hover:after:w-full
          "
          >
            <InfoIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Sobre nós</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="rounded-2xl bg-blue-400 p-4 px-6 flex items-center gap-2 cursor-pointer">
            <PhoneCallIcon className="text-blue-200" size={22} />
            <span className="text-blue-50 font-semibold">Contato</span>
          </button>
        </div>
      </div>
    </div>
  );
}
