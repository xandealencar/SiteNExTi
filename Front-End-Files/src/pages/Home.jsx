import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Time from "../components/Time";
import Principal from "../components/Principal";
import Edital from "../components/Edital";
import Projetos from "../components/Projetos";
import Eventos from "../components/Eventos";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Principal />
      <Sobre />
      <Projetos />
      <Eventos />
      <Time />
      <Contato />
    </div>
  );
}

export default Home;
