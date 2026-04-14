import { Link } from "react-router-dom";
import type { Asistencia } from "../types/Asistencia";

interface Props {
  asistencias: Asistencia[];
  onDelete: (id: number) => void;
  onEdit: (a: Asistencia) => void;
  dateFilter: string;
  onDateFilterChange: (value: string) => void;
  onClearDateFilter: () => void;
}

export const AsistenciaList = ({
  asistencias,
  onDelete,
  onEdit,
  dateFilter,
  onDateFilterChange,
  onClearDateFilter,
}: Props) => {
  const hasFilter = dateFilter.length > 0;

  return (
    <div className="mt-6">
      <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold">Lista de Asistencias</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <label htmlFor="fecha-filter" className="text-sm font-medium text-gray-700">
              Filtrar por fecha
            </label>
            <input
              id="fecha-filter"
              type="date"
              value={dateFilter}
              onChange={(e) => onDateFilterChange(e.target.value)}
              className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            {hasFilter && (
              <button
                type="button"
                onClick={onClearDateFilter}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Limpiar
              </button>
            )}
          </div>

          <Link
            to="/crear"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Añadir asistencia
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        {asistencias.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-500">
            {hasFilter
              ? "No hay asistencias para la fecha seleccionada."
              : "No hay asistencias registradas."}
          </div>
        ) : (
          asistencias.map((a) => (
          <div
            key={a.id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
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
              <button
                onClick={() => onEdit(a)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(a.id!)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
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