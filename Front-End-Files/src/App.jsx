import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeCompleto from "./components/TimeCompleto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time-completo" element={<TimeCompleto />} />
      </Routes>
    </Router>
  );
}

export default App;