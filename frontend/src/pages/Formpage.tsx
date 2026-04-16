import { useEffect, useState } from "react";
import { createAsistencia, getAsistencia, updateAsistencia } from "../api/asistencias";
import { AsistenciaForm } from "../components/AsistenciaForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { Asistencia } from "../types/Asistencia";
export const FormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selected, setSelected] = useState<Asistencia | null>(null);

  // 🔹 Cargar datos si estás editando
  useEffect(() => {
    if (id) {
      getAsistencia(Number(id)).then(setSelected);
    }
  }, [id]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        {id ? "Editar Asistencia" : "Nueva Asistencia"}
      </h1>

      <AsistenciaForm
        selected={selected}
        onSubmit={async (data) => {
          if (id) {
            await updateAsistencia(Number(id), data);
          } else {
            await createAsistencia(data);
          }

          alert("Guardado!");
          navigate("/asistencias");
        }}
      />
    </div>
  );
};