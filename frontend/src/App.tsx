import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Lista } from "./pages/Lista";
import { FormPage } from "./pages/Formpage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asistencias" element={<Lista />} />
          <Route path="/crear" element={<FormPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;