import "./App.css";
import { Landing } from "./Rutas/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import { Productos } from "./Rutas/Productos/Productos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/productos/:categoria" element={<Productos />} />
    </Routes>
  );
}

export default App;
