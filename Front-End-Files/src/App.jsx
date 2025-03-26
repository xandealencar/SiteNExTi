import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, Menu } from "lucide-react";
import Sobre from "./components/Sobre";
import Principal from "./components/Principal";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Principal />
      <Sobre />
    </div>
  );
}

export default App;
