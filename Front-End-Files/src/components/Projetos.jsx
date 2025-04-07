import { useNavigate } from "react-router-dom";

function Projetos() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4">
      <h1 className="text-2xl text-[#006A9B] font-bold mb-4 text-center">
        Projetos
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-[#006A9B] rounded-xl flex flex-col  items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
          <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
            <h2 className="text-white font-bold">Ponto Eletrônico</h2>
            <img
              src="https://i.ibb.co/Z1VSPrRM/Ponto.png"
              alt="Ponto"
              className="w-[150px] h-auto"
            />
            <p className="w-[200px] text-center text-white text-sm">
              O Ponto Eletrônico consiste em um ambiente virtual em que os
              alunos possam registrar seu ponto de entrada e saída.
            </p>
          </div>
        </div>
        <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
          <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
            <h2 className="text-white font-bold">Plataforma de estágio</h2>
            <img
              src="https://i.ibb.co/JjjnbZr0/PEstagio.png"
              alt="Ponto"
              className="w-[150px] h-auto"
            />
            <p className="w-[200px] text-center text-white text-sm">
              A Plataforma de estágio consiste em ajudar pessoas a começar no
              mercado de trabalho.
            </p>
          </div>
        </div>

        <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
          <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
            <h2 className="text-white font-bold">Banco de Talentos</h2>
            <img
              src="https://i.ibb.co/TDC9Gfwr/BancoT.png"
              alt="Banco"
              className="w-[150px] h-auto"
            />
            <p className="w-[200px] text-center text-white text-sm">
              O banco de talentos consiste em ajudar pessoas a aprimorar seus
              pontos fortes ou mesmo a descobri-los.
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="bg-[#FFB800] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e6a600] transition-colors">
        Ver mais
      </button>
    </div>
  );
}

export default Projetos;
