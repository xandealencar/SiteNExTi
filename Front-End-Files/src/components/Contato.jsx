import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";

function Contato() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-blue-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl text-white font-bold mb-8">Contato</h1>
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="flex-1 text-center">
              <div className="text-center md:text-left mb-6">
                <div className="text-[#FFB800]">
                  <p className="font-bold ">R. Santa Isabel - Nº 245</p>
                  <p>São Miguel</p>
                  <p>Juazeiro Do Norte - Ceará</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <a href="#">
                  <button className="text-blue-800 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                    <Linkedin />
                  </button>
                </a>
                <a href="https://www.youtube.com/user/FaculdadeParaiso/">
                  <button className="text-blue-800 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                    <Youtube />
                  </button>
                </a>
                <a href="https://pt-br.facebook.com/faculdadeparaiso/">
                  <button className="text-blue-800 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                    <Facebook />
                  </button>
                </a>
                <a href="https://www.instagram.com/nextifap/">
                  <button className="text-blue-800 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                    <Instagram />
                  </button>
                </a>
              </div>
              <img
                src="https://i.ibb.co/B2qhrNfv/logo-unifap.png"
                alt="UniFAP Logo"
                className="h-12 flex items-center md:items-start justify-center md:justify-start mx-auto md:mx-0"
              />

              <p className="text-white text-sm mt-4 flex justify-center md:justify-start">
                © <span className="text-white">NExTI 2025 </span>
                <a
                  href="https://nexti.unifap.edu.br"
                  className="text-yellow-400 font-bold hover:underline"
                >
                  - nexti.unifap.edu.br
                </a>
              </p>
            </div>
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.5775861431723!2d-39.31198516792215!3d-7.205390816189286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a179f3e713bff5%3A0x889abf3a34088241!2sGaragem%20LAB!5e0!3m2!1spt-PT!2sbr!4v1743187470507!5m2!1spt-PT!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
