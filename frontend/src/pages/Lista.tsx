import { useEffect, useState } from "react";
import { getAsistencia, deleteAsistencia } from "../api/asistencias";
import { AsistenciaList } from "../components/AsistenciaList";
import type { Asistencia } from "../types/Asistencia";

export const Lista = () => {
  const [data, setData] = useState<Asistencia[]>([]);
  const [dateFilter, setDateFilter] = useState("");

  const load = async () => {
    const res = await getAsistencia(0);
    setData(res);
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
        await deleteAsistencia(id);
        load();
      }}
      onEdit={() => {}}
      dateFilter={dateFilter}
      onDateFilterChange={setDateFilter}
      onClearDateFilter={() => setDateFilter("")}
    />
  );
};