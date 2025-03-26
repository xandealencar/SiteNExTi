function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl text-blue-900 font-bold mb-4 text-center">
        Sobre
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        <div className="rounded-md bg-blue-900 text-white flex flex-col md:flex-row items-center justify-center gap-5 w-full">
          <img
            src="https://img.freepik.com/fotos-gratis/fundo-abstrato-gradiente-azul-azul-escuro-liso-com-vinheta-preta-studio_1258-67810.jpg?semt=ais_hybrid"
            alt="imagem-sobre"
            className="w-full h-80 object-cover rounded-t-md md:rounded-l-md"
          />
          <div className="p-8 flex flex-col gap-5 w-full">
            <div className="text-left">
              <h3 className="text-yellow-400 font-bold">Missão:</h3>
              <p className="text-sm mt-2">
                Capacitar nossos estudantes para se tornarem profissionais
                excepcionais em tecnologia da informação, prontos para enfrentar
                desafios complexos e contribuir para a inovação na sociedade.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-yellow-400 font-bold">Visão:</h3>
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
    </div>
  );
}

export default Sobre;
