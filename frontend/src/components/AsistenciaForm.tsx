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
  <form
    onSubmit={handleSubmit}
    className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-sm"
  >
    <h2 className="text-lg font-semibold">Registrar Asistencia</h2>

    <input
      name="nombre"
      placeholder="Nombre"
      value={form.nombre}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded"
    />

    <input
      type="date"
      name="fecha"
      value={form.fecha}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded"
    />

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="presente"
        checked={form.presente}
        onChange={handleChange}
      />
      Presente
    </label>

    <textarea
      name="observacion"
      placeholder="Observación"
      value={form.observacion}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />

    <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
      Guardar
    </button>
  </form>
)};