import { HomeIcon, InfoIcon, PhoneCallIcon, UserStarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { bebasNeueFont } from "@/app/layout";
import Logo from "@/public/logo.png";

interface IHeaderProps {
  page: string;
}

const selectedLinkClass =
  `relative flex items-center justify-center gap-2 cursor-pointer px-2
          after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-slate-950
          after:animate-underline`.trim();

const unselectedLinkClass =
  `relative flex items-center justify-center gap-2 cursor-pointer px-2
          after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-slate-950 after:transition-all after:duration-300 hover:after:w-full
`.trim();

export function Header({ page }: IHeaderProps) {
  function comparePage(item_page: string): string {
    return page == item_page ? selectedLinkClass : unselectedLinkClass;
  }

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
          className={`text-sky-700 font-bold text-3xl ${bebasNeueFont.variable} inline-block animate-fade2`}
        >
          Lumora Ortodontia
        </span>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center gap-10">
          <Link href={"/"} className={comparePage("inicio")}>
            <HomeIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Início</span>
          </Link>

          <Link href={"/servicos"} className={comparePage("servicos")}>
            <UserStarIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Serviços</span>
          </Link>

          <Link href={"/sobre-nos"} className={comparePage("sobre-nos")}>
            <InfoIcon className="text-slate-950" size={24} />
            <span className="text-slate-900">Sobre nós</span>
          </Link>
        </div>

        {page != "contato" && (
          <Link
            href={"/contato"}
            className="rounded-2xl bg-zinc-900 p-4 px-6 flex items-center gap-2 cursor-pointer"
          >
            <span className="text-zinc-50 font-semibold">Contato</span>
            <PhoneCallIcon className="text-zinc-200" size={22} />
          </Link>
        )}
      </div>
    </div>
  );
}
