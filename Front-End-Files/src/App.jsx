import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";
import Contato from "./components/Contato";
import Sobre from "./components/Sobre";
import Principal from "./components/Principal";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Principal />
      <Sobre />
      <Contato />
    </div>
  );
}

export default App;
