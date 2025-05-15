import { useState } from "react";
import Contato from "./Contato";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Ajustetela";
import fabricio from "../img/fabricio.JPEG";
import francisco from "../img/francisco.JPEG";
import pedro from "../img/pedro.JPEG";
import beatriz from "../img/beatriz.JPEG";
import brenda from "../img/brenda.JPEG";
import caio from "../img/caio.JPEG";
import gabriel from "../img/gabriel.JPEG";
import ian from "../img/ian.JPEG";
import icaro from "../img/icaro.JPEG";
import igor from "../img/igor.JPEG";
import leonardo from "../img/leonardo.JPEG";
import lucas from "../img/lucas.JPEG";
import sergio from "../img/sergio.JPEG";
import luiz from "../img/luiz.JPEG";
import raissa from "../img/raissa.JPEG";
import thiago from "../img/thiago.JPEG";

 
const teamMembers = [
  {
    name: "Fabrício Carneiro",
    role: "Coordenador",
    image: fabricio,
  },
  {
    name: "Francisco Rodrigues",
    role: "Professor",
    image: francisco,
  },
  {
    name: "Beatriz Rolim",
    role: "Aluno",
    image: beatriz,
  },
  {
    name: "Brenda Evelyn",
    role: "Aluno",
    image: brenda,
  },
  {
    name: "Caio Tarso",
    role: "Aluno",
    image: caio,
  },
  {
    name: "Gabriel Lucas",
    role: "Aluno",
    image: gabriel,
  },
  {
    name: "Ian Caleb",
    role: "Aluno",
    image: ian,
  },
  {
    name: "Ícaro Moreira",
    role: "Aluno",
    image: icaro,
  },
  {
    name: "Igor Nunes",
    role: "Aluno",
    image: igor,
  },
  {
    name: "Leonardo Morais",
    role: "Aluno",
    image: leonardo,
  },
  {
    name: "Luis Sanches",
    role: "Aluno",
    image: luiz,
  },
  {
    name: "Pedro Alexandre",
    role: "Aluno",
    image: pedro,
  },
  {
    name: "Raissa Zacarias",
    role: "Aluno",
    image: raissa,
  },
  {
    name: "Sergio Lucas",
    role: "Aluno",
    image: sergio,
  },
  {
    name: "Thiago Tavares",
    role: "Aluno",
    image: thiago,
  },
  {
    name: "Thiago Borges",
    role: "Aluno",
    image: lucas,
  },
];

function TimeCompleto() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="flex justify-center mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://i.ibb.co/fVJR7jF5/NEXTI-logo.png"
            alt="NEXTI Logo"
            className="h-14 mt-8"
          />
        </div>

        <div className="flex items-center justify-center gap-4  pt-14">
          <div className="w-56 h-64 rounded-lg overflow-hidden opacity-50 flex items-end justify-center">
            <img
              src={
                teamMembers[
                  (currentIndex - 1 + teamMembers.length) % teamMembers.length
                ].image
              }
              alt="Membro anterior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-72 rounded-lg overflow-hidden flex items-end justify-center">
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-56 h-64  rounded-lg overflow-hidden opacity-50 flex items-end justify-center">
            <img
              src={teamMembers[(currentIndex + 1) % teamMembers.length].image}
              alt="Próximo membro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <h3 className="text-3xl text-[#006699] font-bold">
            {teamMembers[currentIndex].name}
          </h3>
          <p className="text-[#FFB800] text-xl font-semibold">
            {teamMembers[currentIndex].role}
          </p>
        </div>
      </div>

      <div className="flex justify-end w-full mt-6 pr-12 mb-12">
        <button
          onClick={prevMember}
          className="bg-[#FFB800] text-white text-[25px] w-12 h-12 rounded-[10px] flex items-center justify-center hover:bg-[#e6a600] transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextMember}
          className="bg-[#FFB800] text-white text-[25px] w-12 h-12 rounded-[10px] flex items-center justify-center ml-4 hover:bg-[#e6a600] transition-colors"
        >
          →
        </button>
      </div>

      <Contato />
    </div>
  );
}

export default TimeCompleto;
