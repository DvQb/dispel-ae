import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Equipamiento from "./pages/Equipamiento";
import Carreras from "./pages/Carreras";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/equipamiento" element={<Equipamiento />} />
      <Route path="/carreras" element={<Carreras />} />
    </Routes>
  );
}

export default App;
