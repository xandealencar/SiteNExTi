import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeCompleto from "./components/TimeCompleto";
import ProjetosPage from "./pages/ProjetosPage";
import AccelerationStartups from "./pages/AccelerationStartups";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time-completo" element={<TimeCompleto />} />
        <Route path="/projetos" element={<ProjetosPage />} />
        <Route path="/AccelerationStartups" element={<AccelerationStartups />} />
      </Routes>
    </Router>
  );
}

export default App;