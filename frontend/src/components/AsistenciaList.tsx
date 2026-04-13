import type { Asistencia } from "../types/Asistencia";

interface Props {
  asistencias: Asistencia[];
  onDelete: (id: number) => void;
  onEdit: (a: Asistencia) => void;
}

export const AsistenciaList = ({ asistencias, onDelete, onEdit }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Lista de Asistencias</h2>

      <div className="space-y-2">
        {asistencias.map((a) => (
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
        ))}
      </div>
    </div>
  );
};