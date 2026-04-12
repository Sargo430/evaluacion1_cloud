import { useEffect, useState } from "react";
import type { Asistencia } from "../types/Asistencia";
import {
  getAsistencias,
  createAsistencia,
  updateAsistencia,
  deleteAsistencia,
} from "../api/asistencias";
import { AsistenciaList } from "../components/AsistenciaList";
import { AsistenciaForm } from "../components/AsistenciaForm";

export const Home = () => {
  const [asistencias, setAsistencias] = useState<Asistencia[]>([]);
  const [selected, setSelected] = useState<Asistencia | null>(null);

  const loadData = async () => {
    const data = await getAsistencias();
    setAsistencias(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data: Asistencia) => {
    if (data.id) {
      await updateAsistencia(data.id, data);
    } else {
      await createAsistencia(data);
    }
    setSelected(null);
    loadData();
  };

  const handleDelete = async (id: number) => {
    await deleteAsistencia(id);
    loadData();
  };

  return (
    <div>
      <h1>Control de Asistencia</h1>

      <AsistenciaForm onSubmit={handleSubmit} selected={selected} />

      <AsistenciaList
        asistencias={asistencias}
        onDelete={handleDelete}
        onEdit={setSelected}
      />
    </div>
  );
};