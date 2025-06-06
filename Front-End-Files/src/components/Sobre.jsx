import nexti from "../img/nexti.JPEG";
import nextialunos from "../img/nextialunos.JPEG";

function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl text-[#006A9B] font-bold mb-4 text-center">
        Sobre
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        <div className="rounded-lg border-[2px] border-[#006A9B]  text-white flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5 w-full">
          <img
            src={nextialunos}
            alt="imagem-sobre"
            className="w-full md:w-1/2 object-cover rounded-md"
          />

          <div className="p-6 flex flex-col gap-5 w-full md:w-1/2 h-full">
            <div className="text-left">
              <h3 className="text-[#FFC500] font-bold">Missão:</h3>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Capacitar nossos estudantes para se tornarem profissionais
                excepcionais em tecnologia da informação, prontos para enfrentar
                desafios complexos e contribuir para a inovação na sociedade.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-[#FFC500] font-bold">Visão:</h3>
              <p className=" text-[#4A4A4A] text-sm mt-2">
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
        <h2 className="text-[#006A9B] font-bold">Valores do NEXTI:</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h3 className="text-[#4A4A4A] font-bold">Aprendizado contínuo:</h3>
            <p className="text-[#4A4A4A]">
              Valorizamos a busca constante pelo conhecimento e incentivamos
              nossos alunos a se manterem atualizados em um campo em constante
              evolução.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-[#4A4A4A]">Inovação:</h3>
            <p className="text-[#4A4A4A]">
              Encorajamos a criatividade e a busca por soluções inovadoras que
              possam fazer a diferença na sociedade e na indústria de TI.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-[#4A4A4A]">
              Ética e Responsabilidade:
            </h3>
            <p className="text-[#4A4A4A]">
              Promovemos a integridade, a ética e a responsabilidade em todas as
              nossas ações, preparando nossos alunos para serem profissionais
              éticos e conscientes.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-[#4A4A4A]">Trabalho em equipe:</h3>
            <p className="text-[#4A4A4A]">
              Reconhecemos a importância do trabalho em equipe e da colaboração,
              capacitando nossos alunos a serem membros eficazes de equipes
              multidisciplinares.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-[#4A4A4A]">Empreendedorismo:</h3>
            <p className="text-[#4A4A4A]">
              Incentivamos o empreendedorismo e a mentalidade empresarial,
              capacitando nossos alunos a identificar oportunidades e criar
              soluções de valor.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-[#4A4A4A]">
              Comunidade e Responsabilidade Social:
            </h3>
            <p className="text-[#4A4A4A]">
              Contribuímos ativamente para a comunidade local, utilizando nossa
              expertise para resolver problemas e melhorar a qualidade de vida
              das pessoas.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl pt-8">
        <div className="rounded-lg border-[2px] border-[#006A9B] text-white flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5 w-full">
          <div className="p-6 flex flex-col gap-5 w-full md:w-1/2 h-full">
            <div className="text-left">
              <h3 className="text-[#FFC500] font-bold">
                Objetivos institucionais e acadêmicos
              </h3>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Experiência Prática: Proporcionar aos alunos voluntários a
                oportunidade de aplicar o conhecimento teórico em situações
                práticas, desenvolvendo projetos de software, sistemas web,
                aplicativos móveis e soluções de TI.
              </p>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Integração com o Mercado: Estabelecer parcerias estratégicas com
                empresas e organizações locais, permitindo que nossos alunos
                trabalhem em projetos reais e conheçam as demandas do mercado.
              </p>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Aprimoramento Profissional: Promover o desenvolvimento de hard
                skills e soft skills, como trabalho em equipe, comunicação
                eficaz e resolução de problemas.
              </p>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Inovação e Pesquisa: Estimular a pesquisa e o desenvolvimento de
                tecnologias inovadoras, contribuindo para o avanço da área de
                tecnologia da informação.
              </p>
              <p className="text-[#4A4A4A] text-sm mt-2">
                Serviço à Comunidade: Utilizar nosso conhecimento e recursos
                para oferecer soluções tecnológicas que beneficiem a comunidade
                local.
              </p>
            </div>
          </div>
          <img
            src={nexti}
            alt="imagem-sobre"
            className="w-full md:w-1/2 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="text-center flex flex-col gap-5 w-full max-w-[90%] mx-auto">
        <h3 className="text-[#FFC500] font-bold pt-5">Nossos Parceiros:</h3>
        <div className="flex flex-wrap justify-center items-center gap-5 w-full overflow-hidden">
          <img
            src="https://nexti.fapce.edu.br/img/logos/sitio_barreiras_logo.png"
            alt="sitio-barreiras-logo"
            className="w-[40%] max-w-[120px] sm:max-w-[150px] object-contain"
          />
          <img
            src="https://nexti.fapce.edu.br/img/logos/brisanet.svg"
            alt="brisanet-logo"
            className="w-[40%] max-w-[120px] sm:max-w-[150px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
