import type { Asistencia } from "../types/Asistencia";

interface Props {
  asistencias: Asistencia[];
  onDelete: (id: number) => void;
  onEdit: (a: Asistencia) => void;
}

export const AsistenciaList = ({ asistencias, onDelete, onEdit }: Props) => {
  return (
    <div>
      <h2>Lista de Asistencias</h2>
      <ul>
        {asistencias.map((a) => (
          <li key={a.id}>
            {a.nombre} - {a.fecha} - {a.presente ? "Presente" : "Ausente"}
            <button onClick={() => onEdit(a)}>Editar</button>
            <button onClick={() => onDelete(a.id!)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};