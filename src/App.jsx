import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextFormProvider from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <ContextFormProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </ContextFormProvider>
    </div>
  );
}

export default App;
