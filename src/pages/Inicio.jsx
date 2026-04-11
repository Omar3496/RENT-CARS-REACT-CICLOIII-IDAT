import { HomeDetails } from "../components/home/Details";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Inicio() {

  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // 🔥 actualizar estado cuando cambie localStorage
  useEffect(() => {
    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // 🔥 fuerza render inmediato
    navigate("/inicio", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#497ACE]/20 via-white to-[#497ACE]/10">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-[#497ACE] to-[#6B9CFF] shadow-md">
        
        <h1 className="font-bold text-white text-[22px] tracking-wide">
          RentCars
        </h1>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-white text-[#497ACE] px-5 py-2 rounded-xl font-semibold shadow-sm"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-[#497ACE] text-[18px] px-5 py-2 rounded-xl font-bold shadow-sm "
          >
            Iniciar Sesión
          </button>
        )}

      </div>

      {/* CONTENIDO */}
      <div className="py-6">

        <h2 className="text-xl font-bold px-6 mb-4">
          Conoce los más rentados de la semana
        </h2>

        <HomeDetails order="" search="" />

      </div>

    </div>
  );
}