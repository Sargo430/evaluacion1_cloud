import { useEffect, useState } from "react";
import { getAsistencias, deleteAsistencia } from "../api/asistencias";
import { AsistenciaList } from "../components/AsistenciaList";
import type { Asistencia } from "../types/Asistencia";

export const Lista = () => {
  const [data, setData] = useState<Asistencia[]>([]);
  const [dateFilter, setDateFilter] = useState("");

  const load = async () => {
    try {
      const res = await getAsistencias(); // ✅ correcto
      setData(res);
    } catch (error) {
      console.error("Error cargando asistencias:", error);
    }
  };

  const filteredData = dateFilter
    ? data.filter((asistencia) => asistencia.fecha === dateFilter)
    : data;

  useEffect(() => {
    load();
  }, []);

  return (
    <AsistenciaList
      asistencias={filteredData}
      onDelete={async (id) => {
        if (!id) return; // ✅ evita crash
        await deleteAsistencia(id);
        load();
      }}
     
      dateFilter={dateFilter}
      onDateFilterChange={setDateFilter}
      onClearDateFilter={() => setDateFilter("")}
    />
  );
};