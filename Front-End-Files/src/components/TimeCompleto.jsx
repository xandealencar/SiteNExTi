import { useState } from "react";
import Contato from "./Contato"; 
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Fabrício Carneiro",
    role: "Coordenador",
    image: "/fabricio.jpg",
  },
  {
    name: "Francisco Rodrigues",
    role: "Professor",
    image: "/francisco.jpg",
  },
];

function TimeCompleto() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex justify-center mb-8 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://i.ibb.co/fVJR7jF5/NEXTI-logo.png"
            alt="NEXTI Logo"
            className="h-14 mt-8"
          />
        </div>

        
        <div className="flex items-center justify-center gap-4  pt-14">
          <div className="w-56 h-64 bg-[#FFB800] rounded-lg overflow-hidden opacity-50">
            <img
              src={teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length].image}
              alt="Membro anterior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-72 bg-[#FFB800] rounded-lg overflow-hidden">
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-56 h-64 bg-[#FFB800] rounded-lg overflow-hidden opacity-50">
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