import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
function Principal() {
  return (
    <div className="bg-blue-900 h-[650px] flex flex-col items-center gap-40 pt-20">
      <div className="flex justify-between w-full px-20">
        <img
          src="https://nexti.fapce.edu.br/img/logos/logo.png"
          alt="nexti-logo"
          className="h-10"
        />
        <div className="flex gap-2">
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
      </div>
      <div className="w-96 flex flex-col gap-2">
        <h1 className="text-[30px] text-center font-bold text-white">
          Núcleo de Extensão em Tecnologia da Informação
        </h1>
        <h2 className="text-[20px] text-yellow-400 text-center font-bold text-sm">
          Transformando alunos em profissionais!
        </h2>
      </div>
    </div>
  );
}

export default Principal;
