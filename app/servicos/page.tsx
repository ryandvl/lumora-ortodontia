import { Header } from "@/components/header";

export default function Services() {
  return (
    <div className="relative rounded-4xl bg-slate-50 w-full h-full p-4 px-8 pb-90 flex flex-col gap-40">
      <Header page="servicos" />

      <div className="flex flex-col justify-between gap-16">
        <span className="text-sky-600 font-extrabold text-5xl animate-fade">
          Descrição dos Serviços
        </span>

        <div className="flex items-center gap-4 justify-center">
          {[
            "Avaliação ortodonticas completa",
            "Aparelho fixo",
            "Aparelho estético (porcelana ou safira)",
            "Alinhadores transparentes",
            "Manutenção e acompanhamento mensal",
            "Contenção pós tratamento",
          ].map((name, i) => (
            <button
              key={i}
              className="bg-indigo-400 p-4 rounded-2xl w-96 h-30 flex flex-col items-center justify-center gap-4 shadow animate-fade2"
            >
              <span className="text-zinc-50 font-bold text-2xl">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
