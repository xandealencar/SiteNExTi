import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";
import { motion } from "framer-motion"; // Importando framer-motion

function Principal() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="bg-[#006A9B] h-[650px] flex flex-col items-center gap-36 pt-20">
      <div className="flex items-center justify-between w-full px-6 md:px-20">
        <img
          src="https://i.ibb.co/fVJR7jF5/NEXTI-logo.png"
          alt="nexti-logo"
          className="h-12"
        />

        <div className="hidden md:flex gap-2">
          <a href="https://unifapce.edu.br/">
            <button className="text-xs font-bold text-[#006A9B] bg-white rounded-full w-16 h-10 flex justify-center items-center">
              Portal
            </button>
          </a>
          <a href="https://www.linkedin.com/school/unifapce/">
            <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <Linkedin />
            </button>
          </a>
          <a href="https://www.youtube.com/user/FaculdadeParaiso/">
            <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <Youtube />
            </button>
          </a>
          <a href="https://pt-br.facebook.com/faculdadeparaiso/">
            <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <Facebook />
            </button>
          </a>
          <a href="https://www.instagram.com/nextifap/">
            <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <Instagram />
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuAberto(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {menuAberto && (
        <motion.div
          className="fixed inset-0 flex justify-end"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-64 h-full bg-white bg-opacity-0 pt-20 pb-5 pl-5 pr-5 flex flex-col items-end gap-4">
            <button
              className="text-white text-2xl w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuAberto(false)}
            ></button>
            <a href="#">
              <button className="text-[#006A9B] bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center text-sm font-bold">
                Portal
              </button>
            </a>
            <a href="#">
              <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Linkedin />
              </button>
            </a>
            <a href="https://www.youtube.com/user/FaculdadeParaiso/">
              <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Youtube />
              </button>
            </a>
            <a href="https://pt-br.facebook.com/faculdadeparaiso/">
              <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Facebook />
              </button>
            </a>
            <a href="https://www.instagram.com/nextifap/">
              <button className="text-[#006A9B] bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Instagram />
              </button>
            </a>
          </div>
        </motion.div>
      )}

      <div className="w-full max-w-[600px] px-4 flex flex-col gap-2">
        <h1 className="text-3xl md:text-[40px] text-center font-bold text-white">
          Núcleo de Extensão em Tecnologia da Informação
        </h1>
        <h2 className="text-lg md:text-[25px] text-[#FFC500] text-center font-bold">
          Transformando alunos em profissionais!
        </h2>
      </div>
    </div>
  );
}

export default Principal;
