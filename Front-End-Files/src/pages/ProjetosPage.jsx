import Contato from "../components/Contato";
import { useNavigate } from "react-router-dom";

function ProjetosPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 pb-10">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://i.ibb.co/fVJR7jF5/NEXTI-logo.png"
            alt="NEXTI Logo"
            className="h-14 mt-8"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-10 pt-10 pb-10">
          <h1 className="text-[#006A9B] text-2xl font-bold">
            Projetos do NExTi
          </h1>
          <div className="flex flex-col md:flex-row w[500px] gap-5 flex-wrap justify-center align-center">
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
                  A Plataforma de estágio consiste em ajudar pessoas a começar
                  no mercado de trabalho.
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
                  O banco de talentos consiste em ajudar pessoas a aprimorar
                  seus pontos fortes ou mesmo a descobri-los.
                </p>
              </div>
            </div>
            <div className="bg-[#006A9B] rounded-xl flex flex-col  items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">
                  Acompanhamento de <br /> processos do NPJ
                </h2>
                <img
                  src="https://i.ibb.co/VcwXgpfd/npj.jpg"
                  alt="NPJ"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema que facilite o acompanhamento dos processos do NPJ,
                  permitindo que o professor tenha maior controle e organização
                  sobre os processos.
                </p>
              </div>
            </div>
            <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">Sistema de doação</h2>
                <img
                  src="https://i.ibb.co/wNXsYQ6j/doacao.jpg"
                  alt="doacao"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema que permite que instituições filantrópicas possam
                  cadastrar doadores, os doadores informam quanto querem doar e
                  esse valor será cobrado nas respectivas contas de energia.
                </p>
              </div>
            </div>

            <div className="bg-[#006A9B] rounded-xl flex flex-col  items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">Vocabulário web</h2>
                <img
                  src="https://i.ibb.co/G3nXCjsT/web.jpg"
                  alt="vocabulario"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema de dicionário web que facilita o aprendizado de
                  palavras em inglês de forma gameficada.
                </p>
              </div>
            </div>
            <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">Gerador de declarações</h2>
                <img
                  src="https://i.ibb.co/Y4wCXRTv/declara-o.jpg"
                  alt="declaracao"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema capaz de gerar declarações, relatórios apenas
                  alterando informações pertinentes, tais como nome do
                  declarante, nome do aluno, data da declaração, atividade
                  realizada, período.
                </p>
              </div>
            </div>

            <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">
                  Sistema de controle de notas
                </h2>
                <img
                  src="https://i.ibb.co/rfwKyMbF/notas.jpg"
                  alt="notas"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema que permite ao administrador gerenciar informações
                  sobre empreendedorismo, tais como artigos, imagens,
                  entrevistas e similares.
                </p>
              </div>
            </div>
            <div className="bg-[#006A9B] rounded-xl flex flex-col  items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">
                  Orçamento Serviço de Segurança
                </h2>
                <img
                  src="https://i.ibb.co/21jwyCn1/orcamento-servico.jpg"
                  alt="servico-seguranca"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Sistema mobile para gerenciamento de vendas de produtos
                  vendidos e serviços.
                </p>
              </div>
            </div>
            <div className="bg-[#006A9B] rounded-xl flex flex-col items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">Controle de notas</h2>
                <img
                  src="https://i.ibb.co/1YnsmRLZ/controle-notas.jpg"
                  alt="controle-notas"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um sistema que permite que os professores realizem a gerência
                  das notas dos alunos de forma otimizada, facilitando a
                  observação de métricas e acompanhamento da turma.
                </p>
              </div>
            </div>

            <div className="bg-[#006A9B] rounded-xl flex flex-col  items-center gap-10 w-[280px] p-4 transform transition duration-300 hover:scale-105">
              <div className="items-center flex flex-col justify-between w-[300px] h-[300px] p-4">
                <h2 className="text-white font-bold">Sediar Maratona Programação IPC</h2>
                <img
                  src="https://i.ibb.co/ccXfKfXr/ipc.jpg"
                  alt="IPC"
                  className="w-[150px] h-auto"
                />
                <p className="w-[200px] text-center text-white text-sm">
                  Um site para exibir informações necessárias sobre a nossa sede para os alunos interessados em participar da maratona.
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
                  A Plataforma de estágio consiste em ajudar pessoas a começar
                  no mercado de trabalho.
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
                  O banco de talentos consiste em ajudar pessoas a aprimorar
                  seus pontos fortes ou mesmo a descobri-los.
                </p>
              </div>
            </div>
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
                  A Plataforma de estágio consiste em ajudar pessoas a começar
                  no mercado de trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contato />
    </div>
  );
}

export default ProjetosPage;
