import { Header } from "@/components/header";
import { SmileIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative rounded-4xl bg-slate-50 w-full h-full p-4 px-8 pb-90 flex flex-col gap-40">
      <Header page="contato" />

      <div className="flex justify-center items-center flex-col gap-8 animate-fade">
        <span className="text-4xl">
          Este site é fictício e não possui nenhum meio de contato.
        </span>

        <span className="text-2xl font-bold">
          Código aberto:{" "}
          <a
            href="https://github.com/ryandvl/lumora-ortodontia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-medium"
          >
            github.com/ryandvl/lumora-ortodontia
          </a>
        </span>

        <SmileIcon size={160} fill="yellow" className="mt-16" />
      </div>
    </div>
  );
}
