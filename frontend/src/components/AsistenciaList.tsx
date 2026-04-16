import { Link, useNavigate } from "react-router-dom";
import type { Asistencia } from "../types/Asistencia";

interface Props {
  asistencias: Asistencia[];
  onDelete: (id: number) => void;
  dateFilter: string;
  onDateFilterChange: (value: string) => void;
  onClearDateFilter: () => void;
}

export const AsistenciaList = ({
  asistencias,
  onDelete,
  dateFilter,
  onDateFilterChange,
  onClearDateFilter,
}: Props) => {
  const navigate = useNavigate();
  const hasFilter = dateFilter.length > 0;

  if (!asistencias || !Array.isArray(asistencias)) {
    return <p>Error cargando datos</p>;
  }

  return (
    <div className="mt-6">
      {/* HEADER */}
      <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold">Lista de Asistencias</h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* FILTRO */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <label className="text-sm font-medium text-gray-700">
              Filtrar por fecha
            </label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => onDateFilterChange(e.target.value)}
              className="rounded-md border px-2 py-1 text-sm"
            />
            {hasFilter && (
              <button
                onClick={onClearDateFilter}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* BOTÓN CREAR */}
          <Link
            to="/crear"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Añadir asistencia
          </Link>
        </div>
      </div>

      {/* LISTA */}
      <div className="space-y-2">
        {asistencias.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            {hasFilter
              ? "No hay asistencias para esa fecha"
              : "No hay asistencias"}
          </div>
        ) : (
          asistencias.map((a) => (
            <div
              key={a.id ?? `${a.nombre}-${a.fecha}`}
              className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
            >
              <div>
                <p className="font-medium">{a.nombre}</p>
                <p className="text-sm text-gray-500">{a.fecha}</p>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    a.presente
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {a.presente ? "Presente" : "Ausente"}
                </span>
              </div>

              <div className="flex gap-2">
                {/* EDITAR */}
                <button
                  onClick={() => navigate(`/editar/${a.id}`)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Editar
                </button>

                {/* ELIMINAR */}
                <button
                  onClick={() => {
                    if (!a.id) return;
                    if (!confirm("¿Eliminar asistencia?")) return;
                    onDelete(a.id);
                  }}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};