import { ContactComponent } from "@/components/contact";
import { Header } from "@/components/header";
import {
  Building2Icon,
  CalendarClockIcon,
  MessageSquareWarningIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="relative rounded-4xl bg-slate-50 w-full h-fit p-4 px-8 pb-90 flex flex-col gap-40">
      <Header page="contato" />

      <div className="flex items-center justify-center flex-col gap-4 bg-blue-50 p-6 rounded-full">
        <span className="text-sky-600 text-5xl font-extrabold animate-fade">
          Canais Oficiais de Atendimento — Lumora
        </span>
      </div>

      <div className="flex justify-center items-center gap-8 flex-wrap">
        <ContactComponent
          name="Lumora Recepção"
          contact="@lumora_recepcao"
          icon={<Building2Icon size={24 * 2} className="text-zinc-950" />}
          show_button={false}
        >
          <span>Atendimento presencial.</span>
          <span>Orientação inicial ao paciente.</span>
          <span>Encaminhamento para avaliação ou consulta.</span>
          <span>Apoio administrativo da clínica.</span>
          <span>
            💡 Também funciona como identificação digital da recepção da
            clínica.
          </span>
        </ContactComponent>

        <ContactComponent
          name="Lumora Agendamentos"
          contact="@lumora_agendamentos"
          icon={<CalendarClockIcon size={24 * 2} className="text-zinc-950" />}
          button_message="Agendar"
        >
          <span>Marcação de avaliações</span>
          <span>Marcação de consultas</span>
          <span>Organização da agenda da clínica</span>
          <span>
            💡 Esse canal conecta o interesse do paciente com o atendimento
            clínico.
          </span>
        </ContactComponent>

        <ContactComponent
          name="Lumora Conecta"
          contact="@lumora_conecta"
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.1 9.82C36.2661 7.96821 34.082 6.49993 31.675 5.50073C29.268 4.50152 26.6862 3.99137 24.08 4C13.16 4 4.26 12.9 4.26 23.82C4.26 27.32 5.18 30.72 6.9 33.72L4.1 44L14.6 41.24C17.5 42.82 20.76 43.66 24.08 43.66C35 43.66 43.9 34.76 43.9 23.84C43.9 18.54 41.84 13.56 38.1 9.82ZM24.08 40.3C21.12 40.3 18.22 39.5 15.68 38L15.08 37.64L8.84 39.28L10.5 33.2L10.1 32.58C8.4551 29.9541 7.58185 26.9185 7.58 23.82C7.58 14.74 14.98 7.34 24.06 7.34C28.46 7.34 32.6 9.06 35.7 12.18C37.2352 13.7077 38.4518 15.5251 39.2792 17.5267C40.1067 19.5282 40.5284 21.6742 40.52 23.84C40.56 32.92 33.16 40.3 24.08 40.3ZM33.12 27.98C32.62 27.74 30.18 26.54 29.74 26.36C29.28 26.2 28.96 26.12 28.62 26.6C28.28 27.1 27.34 28.22 27.06 28.54C26.78 28.88 26.48 28.92 25.98 28.66C25.48 28.42 23.88 27.88 22 26.2C20.52 24.88 19.54 23.26 19.24 22.76C18.96 22.26 19.2 22 19.46 21.74C19.68 21.52 19.96 21.16 20.2 20.88C20.44 20.6 20.54 20.38 20.7 20.06C20.86 19.72 20.78 19.44 20.66 19.2C20.54 18.96 19.54 16.52 19.14 15.52C18.74 14.56 18.32 14.68 18.02 14.66H17.06C16.72 14.66 16.2 14.78 15.74 15.28C15.3 15.78 14.02 16.98 14.02 19.42C14.02 21.86 15.8 24.22 16.04 24.54C16.28 24.88 19.54 29.88 24.5 32.02C25.68 32.54 26.6 32.84 27.32 33.06C28.5 33.44 29.58 33.38 30.44 33.26C31.4 33.12 33.38 32.06 33.78 30.9C34.2 29.74 34.2 28.76 34.06 28.54C33.92 28.32 33.62 28.22 33.12 27.98Z"
                fill="#09090B"
              />
            </svg>
          }
        >
          <span>Primeiro contato com pacientes.</span>
          <span>Esclarecimento de dúvidas.</span>
          <span>Informações sobre tratamentos.</span>
          <span>Direcionamento para agendamentos.</span>
          <span>💡 É o canal principal de comunicação rápida da clínica.</span>
        </ContactComponent>

        <ContactComponent
          name="Lumora Ortodontia"
          contact="@lumora_ortodontia"
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6 4H32.4C38.8 4 44 9.2 44 15.6V32.4C44 35.4765 42.7779 38.427 40.6024 40.6024C38.427 42.7779 35.4765 44 32.4 44H15.6C9.2 44 4 38.8 4 32.4V15.6C4 12.5235 5.22214 9.57298 7.39756 7.39756C9.57298 5.22214 12.5235 4 15.6 4ZM15.2 8C13.2904 8 11.4591 8.75857 10.1088 10.1088C8.75857 11.4591 8 13.2904 8 15.2V32.8C8 36.78 11.22 40 15.2 40H32.8C34.7096 40 36.5409 39.2414 37.8912 37.8912C39.2414 36.5409 40 34.7096 40 32.8V15.2C40 11.22 36.78 8 32.8 8H15.2ZM34.5 11C35.163 11 35.7989 11.2634 36.2678 11.7322C36.7366 12.2011 37 12.837 37 13.5C37 14.163 36.7366 14.7989 36.2678 15.2678C35.7989 15.7366 35.163 16 34.5 16C33.837 16 33.2011 15.7366 32.7322 15.2678C32.2634 14.7989 32 14.163 32 13.5C32 12.837 32.2634 12.2011 32.7322 11.7322C33.2011 11.2634 33.837 11 34.5 11ZM24 14C26.6522 14 29.1957 15.0536 31.0711 16.9289C32.9464 18.8043 34 21.3478 34 24C34 26.6522 32.9464 29.1957 31.0711 31.0711C29.1957 32.9464 26.6522 34 24 34C21.3478 34 18.8043 32.9464 16.9289 31.0711C15.0536 29.1957 14 26.6522 14 24C14 21.3478 15.0536 18.8043 16.9289 16.9289C18.8043 15.0536 21.3478 14 24 14ZM24 18C22.4087 18 20.8826 18.6321 19.7574 19.7574C18.6321 20.8826 18 22.4087 18 24C18 25.5913 18.6321 27.1174 19.7574 28.2426C20.8826 29.3679 22.4087 30 24 30C25.5913 30 27.1174 29.3679 28.2426 28.2426C29.3679 27.1174 30 25.5913 30 24C30 22.4087 29.3679 20.8826 28.2426 19.7574C27.1174 18.6321 25.5913 18 24 18Z"
                fill="#09090B"
              />
            </svg>
          }
        >
          <span>Divulgação da clínica.</span>
          <span>Conteúdo educativo odontológico.</span>
          <span>Apresentação de tratamentos.</span>
          <span>Captação de novos pacientes.</span>
          <span>💡 Atua como canal de marketing e relacionamento digital.</span>
        </ContactComponent>

        <ContactComponent
          name="Lumora Experience"
          contact="@lumora_experience"
          icon={
            <MessageSquareWarningIcon size={24 * 2} className="text-zinc-950" />
          }
        >
          <span>Avaliação do atendimento</span>
          <span>Feedback dos pacientes</span>
          <span>Registro da experiência do paciente na clínica</span>
          <span>
            💡 Esse canal ajuda a melhorar continuamente o serviço da Lumora.
          </span>
        </ContactComponent>
      </div>
    </div>
  );
}
