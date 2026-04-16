import type { Asistencia } from "../types/Asistencia";

const API_URL = "/api/asistencias/";

export const getAsistencia = async (id: number) => {
  const res = await fetch(`${API_URL}${id}/`);
  return res.json();
};

export const createAsistencia = async (data: Asistencia) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const updateAsistencia = async (id: number, data: Asistencia) => {
  await fetch(`${API_URL}${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteAsistencia = async (id: number) => {
  await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
  });
};
export const getAsistencias = async (): Promise<Asistencia[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener asistencias");
  }

  return res.json();
};