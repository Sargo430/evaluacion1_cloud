

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Bienvenido al sistema de asistencia
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/asistencias"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl font-bold text-indigo-600">
              01
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Ver lista
            </h2>
            <p className="mt-3 text-gray-600">
              Revisa todas las asistencias registradas en el sistema.
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
              Ir a la lista
            </span>
          </Link>

          <Link
            to="/crear"
            className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl font-bold">
              02
            </div>
            <h2 className="text-2xl font-semibold">Agregar nueva entrada</h2>
            <p className="mt-3 text-indigo-100">
              Crea un nuevo registro de asistencia de forma rápida.
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
              Crear asistencia
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};