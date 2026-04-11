import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function InicioWellcome({ setOrder }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔥 SOLO BUSCADOR (sin saludo) */}
      <div className="wellcome-card">
        <span className="font-bold">
          Encuentra tu vehículo ideal 🚗
        </span>

        <input 
          type="text" 
          className="txt-serch" 
          placeholder="Buscar..." 
        />
      </div>

      {/* ORDENAR */}
      <div className="w-full mt-6 px-4 relative">
        
        <div 
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer w-fit text-gray-500 hover:text-black transition"
        >
          <span className="text-gray-700">
            Ordenar por
          </span>

          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>

        {open && (
          <div className="absolute left-0 mt-1 bg-white shadow-md rounded-r-[20px] p-2 w-52 z-50">
            
            <div onClick={() => { setOrder("asc"); setOpen(false); }} className="p-2 hover:bg-gray-100 cursor-pointer text-center">
              Precio: bajo-alto
            </div>

            <div onClick={() => { setOrder("desc"); setOpen(false); }} className="p-2 hover:bg-gray-100 cursor-pointer text-center">
              Precio: alto-bajo
            </div>

          </div>
        )}
      </div>
    </>
  );
}