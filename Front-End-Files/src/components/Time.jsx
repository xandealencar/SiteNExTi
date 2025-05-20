import { useNavigate } from "react-router-dom";
import fabricio from "../img/fabricio.JPEG";
import francisco from "../img/francisco.JPEG";

function Time() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-4 pb-8">
      <h1 className="text-2xl text-[#006A9B] font-bold mb-8 text-center">
        Nosso Time
      </h1>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-72 h-72 bg-[#FFB800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
              <img
                src={fabricio}
                alt="Fabricio Carneiro"
                className="w-full h-full object-cover"  
              />
            </div>
            <h3 className="text-2xl text-[#006A9B] font-bold">
              Fabricio Carneiro
            </h3>
            <p className="text-[#FFB800] text-xl font-semibold">Coordenador</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-72 h-72 bg-[#FFB800] rounded-lg overflow-hidden mb-4">
              <img
                src={francisco}
                alt="Francisco Rodrigues"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl text-[#006A9B] font-bold">
              Francisco Rodrigues
            </h3>
            <p className="text-[#FFB800] text-xl font-semibold">Professor</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/time-completo")}
            className="bg-[#FFB800] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e6a600] transition-colors"
          >
            Ver Todos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Time;
