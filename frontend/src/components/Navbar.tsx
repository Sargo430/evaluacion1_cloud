import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">
        Inicio
      </Link>
      <Link to="/asistencias" className="hover:underline">
        Asistencias
      </Link>
      <Link to="/crear" className="hover:underline">
        Nueva
      </Link>
    </nav>
  );
};