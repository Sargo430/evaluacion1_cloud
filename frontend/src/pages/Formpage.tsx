import { createAsistencia } from "../api/asistencias";
import { AsistenciaForm } from "../components/AsistenciaForm";
import { useNavigate } from "react-router-dom";

export const FormPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Nueva Asistencia</h1>
      <AsistenciaForm
        onSubmit={async (data) => {
          await createAsistencia(data);
          alert("Guardado!");
          navigate("/asistencias");
        }}
      />
    </div>
  );
};