function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl text-blue-800 font-bold mb-4 text-center">
        Sobre
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        <div className="rounded-md bg-blue-800 text-white flex flex-col md:flex-row items-stretch justify-center gap-5 w-full h-full">
          <img
            src="https://img.freepik.com/fotos-gratis/fundo-abstrato-gradiente-azul-azul-escuro-liso-com-vinheta-preta-studio_1258-67810.jpg?semt=ais_hybrid"
            alt="imagem-sobre"
            className="w-full md:w-1/2 h-full object-cover rounded-t-md md:rounded-l-md"
          />

          <div className="p-8 flex flex-col gap-5 w-full md:w-1/2 h-full">
            <div className="text-left">
              <h3 className="text-yellow-500 font-bold">Missão:</h3>
              <p className="text-sm mt-2">
                Capacitar nossos estudantes para se tornarem profissionais
                excepcionais em tecnologia da informação, prontos para enfrentar
                desafios complexos e contribuir para a inovação na sociedade.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-yellow-500 font-bold">Visão:</h3>
              <p className="text-sm mt-2">
                Almejamos ser reconhecidos como líderes na formação de
                profissionais em tecnologia da informação, tanto em nossa
                instituição como em âmbito local e regional. Buscando
                continuamente elevar o padrão de excelência na educação em TI e
                contribuir para o avanço da área de tecnologia da informação.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-4xl pt-8 gap-6">
        <h2 className="text-blue-800 font-bold">Valores do NEXTI:</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h3 className="text-gray-700 font-bold">Aprendizado contínuo:</h3>
            <p className="text-gray-700">
              Valorizamos a busca constante pelo conhecimento e incentivamos
              nossos alunos a se manterem atualizados em um campo em constante
              evolução.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-gray-700">Inovação:</h3>
            <p className="text-gray-700">
              Encorajamos a criatividade e a busca por soluções inovadoras que
              possam fazer a diferença na sociedade e na indústria de TI.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-gray-700">
              Ética e Responsabilidade:
            </h3>
            <p className="text-gray-700">
              Promovemos a integridade, a ética e a responsabilidade em todas as
              nossas ações, preparando nossos alunos para serem profissionais
              éticos e conscientes.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-gray-700">Trabalho em equipe:</h3>
            <p className="text-gray-700">
              Reconhecemos a importância do trabalho em equipe e da colaboração,
              capacitando nossos alunos a serem membros eficazes de equipes
              multidisciplinares.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-gray-700">Empreendedorismo:</h3>
            <p className="text-gray-700">
              Incentivamos o empreendedorismo e a mentalidade empresarial,
              capacitando nossos alunos a identificar oportunidades e criar
              soluções de valor.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-gray-700">
              Comunidade e Responsabilidade Social:
            </h3>
            <p className="text-gray-700">
              Contribuímos ativamente para a comunidade local, utilizando nossa
              expertise para resolver problemas e melhorar a qualidade de vida
              das pessoas.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre;
