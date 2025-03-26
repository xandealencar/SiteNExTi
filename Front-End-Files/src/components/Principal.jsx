import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";

function Principal() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="bg-blue-900 h-[650px] flex flex-col items-center gap-36 pt-20">
      <div className="flex items-center justify-between w-full px-6 md:px-20">
        <img
          src="https://nexti.fapce.edu.br/img/logos/logo.png"
          alt="nexti-logo"
          className="h-12"
        />

        <div className="hidden md:flex gap-2">
          <button className="text-xs font-bold text-blue-900 bg-white rounded-full w-16 h-10 flex justify-center items-center">
            Portal
          </button>
          <button className="text-blue-900 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <Linkedin />
          </button>
          <button className="text-blue-900 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <Youtube />
          </button>
          <button className="text-blue-900 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <Facebook />
          </button>
          <button className="text-blue-900 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <Instagram />
          </button>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuAberto(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {menuAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white bg-opacity-0 backdrop-blur-md h-full shadow-lg p-5 flex flex-col gap-4">
            <button
              className="self-end text-blue-900 text-2xl"
              onClick={() => setMenuAberto(false)}
            >
              X
            </button>
            <button className="text-xs font-bold text-blue-900 bg-gray-200 rounded-full w-16 h-10 flex justify-center items-center">
              Portal
            </button>
            <button className="text-blue-900 bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
              <Linkedin />
            </button>
            <button className="text-blue-900 bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
              <Youtube />
            </button>
            <button className="text-blue-900 bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
              <Facebook />
            </button>
            <button className="text-blue-900 bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
              <Instagram />
            </button>
          </div>
        </div>
      )}

      <div className="w-[500px] flex flex-col gap-2">
        <h1 className="text-[40px] text-center font-bold text-white">
          Núcleo de Extensão em Tecnologia da Informação
        </h1>
        <h2 className="text-[25px] text-yellow-400 text-center font-bold text-sm">
          Transformando alunos em profissionais!
        </h2>
      </div>
    </div>
  );
}

export default Principal;
