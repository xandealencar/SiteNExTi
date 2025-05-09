import { useNavigate } from "react-router-dom";

function Eventos() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/AccelerationStartups");
    };
  return (
    <div className="flex flex-col items-center justify-center px-4 gap-10">
      <h1 className="text-2xl text-[#006A9B] font-bold mb-4 text-center">
        Eventos
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-center md:items-start gap-5">
          <img
            src="https://i.ibb.co/4ZWkH0GN/imagem-edital-nexti.png"
            alt="edital-img"
            className="w-96 h-96"
          />
          <div className="max-w-md w-full md:ml-4 flex flex-col h-96 justify-center">
            <h3 className="text-[#FFC500] font-bold">Edital 2025.1</h3>
            <p className="text-[#4A4A4A]">
              <span className="text-[#FFC500]">#PraCegoVer </span>Trata-se de um
              cartaz que anuncia a seleção de estágio para o Núcleo de Extensão
              em Tecnologia da Informação (NExTI). É composto de uma foto em que
              aparecem três alunos sentados num parque. Duas alunas estão nas
              pontas e seguram livros, o aluno do meio tem um notebook no colo.
            </p>
            <p className="text-[#4A4A4A]">
              O recorte da foto não mostra o rosto dos estudantes. Mais embaixo,
              do lado esquerdo, num retângulo, está a informação de que as
              inscrições no NExTI vão de 6 a 20 de março, com 10 vagas,
              resultado a ser divulgado nos dias 30 e 31 de março, garantindo
              aos classificados bolsa de R$ 130 mensais para, no máximo, 20
              horas semanais de estágio.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-full md:max-w-[1000px] md:flex-row text-start justify-center gap-10">
          <p className="w-full md:w-96 md:mr-4 text-[#4A4A4A]">
            No roda-pé do cartaz, aparecem o site para inscrição (fapce.edu.br),
            o selo do GPTW (que certifica a FAP como uma das melhores empresas
            para trabalhar do Ceará), logo da FAP e selo da nota máxima dada
            pelo Ministério da Educação. Ainda mais embaixo, no final do
            roda-pé, a informação de que as vagas são destinadas a alunos dos
            cursos de Sistemas de Informação e Análise e Desenvolvimento de
            Sistemas (ADS) da FAP.
          </p>
          <div className="w-full md:w-96 md:h-48 flex flex-col gap-2">
            <h3 className="text-[#006A9B] font-bold">NExTi Edital 2025.1</h3>
            <p className="text-[#006A9B]">
              Seleção de colaboradores para o desenvolvimento das atividades do
              NExTI.
            </p>
            <p className="text-[#006A9B]">Edital Completo.</p>
            <h3 className="text-[#FFC500] font-bold">
              Envie suas dúvidas para:
            </h3>
            <p className="text-[#006A9B]">nexit@fapce.edu.br</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-center md:items-start gap-5">
          <img
            src="https://i.ibb.co/4ZWkH0GN/imagem-edital-nexti.png"
            alt="edital-img"
            className="w-96 h-96"
          />
          <div className="max-w-md w-full md:ml-4 flex flex-col md:h-96 justify-center">
            <h3 className="text-[#FFC500] font-bold">
              NExTI Acceleration Startups
            </h3>
            <p className="text-[#4A4A4A]">
              O NExTI Acceleration Startups é um programa gratuito e sem
              cobrança de participação (equity free), voltado para alunos,
              pesquisadores e empreendedores dos cursos de SI e ADS com ideias
              inovadoras. Em 4 meses, os participantes recebem capacitação,
              mentorias, acesso a trilhas de conhecimento, infraestrutura de
              prototipagem, eventos com investidores e um Demo Day para
              apresentar suas soluções. Conecte-se, desenvolva sua ideia e leve
              sua startup para o próximo nível.
            </p>
            <div className="flex flex-col justify-center md:flex md:flex-row gap-10  mt-12">
          <button
            onClick={() => navigate("/")}
            className="bg-[#FFB800] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e6a600] transition-colors"
          >
            Inscrever-se
          </button>
          <button
            onClick={handleClick}
            className="bg-[#FFB800] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e6a600] transition-colors"
          >
            Saiba mais
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventos;
