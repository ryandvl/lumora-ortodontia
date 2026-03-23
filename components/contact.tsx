import type { PropsWithChildren, ReactNode } from "react";

interface IContactProps {
  icon: ReactNode;
  name: string;
  contact: string;
  button_message?: string;
  show_button?: boolean;
}

export function ContactComponent({
  icon,
  button_message = "Entrar em contato",
  show_button = true,
  name,
  contact,
  children,
}: PropsWithChildren<IContactProps>) {
  return (
    <div className="size-fit bg-white flex justify-center items-center p-6 rounded-2xl gap-6 animate-fade2 w-1/3">
      <div className="bg-amber-200 rounded-full p-6">{icon}</div>
      <div className="flex flex-col h-full gap-6">
        <span className="font-bold text-xl justify-center">
          {name + " "}
          <span className="text-sm font-medium text-blue-500">{contact}</span>
        </span>
        <div className="flex flex-col gap-6 text-zinc-900 border-l-2 border-gray-400 pl-2">
          {children}
        </div>

        <div className="w-full flex justify-end items-end">
          {show_button && (
            <button className="p-4 px-12 bg-blue-300 rounded-full text-xl hover:bg-blue-400 transition-colors hover:cursor-pointer text-zinc-800 font-bold">
              {button_message}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
