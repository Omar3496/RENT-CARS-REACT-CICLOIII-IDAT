import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeWellcome } from "../components/home/Wellcome";
import { HomeDetails } from "../components/home/Details";

export function Home() {

  const [order, setOrder] = useState("");
  const [search, setSearch] = useState(""); // ✅ NUEVO
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/inicio");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#497ACE]/20 via-white to-[#497ACE]/10">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-5 bg-[#3E546D] shadow-md">
        
        <h1 className="font-bold text-white text-[22px] tracking-wide">
          RentCars
        </h1>

        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/history")}
            className="bg-white text-[#3E546D] w-26 px-5 h-10 rounded-xl font-bold shadow flex items-center justify-center ml-6"
          >
            Historial
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white w-26 px-5 h-10 rounded-xl font-bold shadow flex items-center justify-center"
          >
            Salir
          </button>

        </div>

      </div>

      {/* CONTENIDO */}
      <HomeWellcome setOrder={setOrder} setSearch={setSearch} /> {/* ✅ */}
      <HomeDetails order={order} search={search} /> {/* ✅ */}

    </div>
  );
}
