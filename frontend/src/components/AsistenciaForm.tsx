import { useState, useEffect } from "react";
import type { Asistencia } from "../types/Asistencia";

interface Props {
  onSubmit: (data: Asistencia) => void;
  selected?: Asistencia | null;
}

export const AsistenciaForm = ({ onSubmit, selected }: Props) => {
  const [form, setForm] = useState<Asistencia>({
    nombre: "",
    fecha: "",
    presente: false,
    observacion: "",
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nombre: "",
      fecha: "",
      presente: false,
      observacion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handleChange}
        required
      />
      <label>
        Presente
        <input
          type="checkbox"
          name="presente"
          checked={form.presente}
          onChange={handleChange}
        />
      </label>
      <textarea
        name="observacion"
        placeholder="Observación"
        value={form.observacion}
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};