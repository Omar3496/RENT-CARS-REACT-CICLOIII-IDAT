import { Characteristics } from '../details/Characteristics'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function HomeWellcome({ setOrder, setSearch }) {

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ estado local del input (IMPORTANTE)
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearch(value); // envía al Home
  };

  return (
    <>
      {/* WELL COME CARD */}
      <div className="wellcome-card">
        <span>
          <strong>Hola, {user?.name || "Invitado"} 👋</strong>
        </span>
        <span>¿Qué Vehículo deseas alquilar hoy?</span>

        <input 
          type="text" 
          className="txt-serch" 
          placeholder="Buscar..."
          value={inputValue} // ✅ controlado
          onChange={handleSearch} // ✅
        />
      </div>

      {/* ORDENAR */}
      <div className="w-full mt-6 px-4 relative">
        
        <div 
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer w-fit text-gray-500 hover:text-black transition">
          
          <span className="font-semibold text-gray-700 active:scale-95">
            Ordenar por
          </span>

          {open ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        {open && (
          <div className="absolute left-0 mt-1 bg-white shadow-md rounded-r-[20px] p-2 w-52 z-50">
            
            <div 
              onClick={() => { setOrder("asc"); setOpen(false); }} 
              className="p-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              Precio: bajo-alto
            </div>

            <div 
              onClick={() => { setOrder("new"); setOpen(false); }} 
              className="p-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              Lo Nuevo
            </div>

            <div 
              onClick={() => { setOrder("featured"); setOpen(false); }} 
              className="p-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              Destacados
            </div>

            <div 
              onClick={() => { setOrder("desc"); setOpen(false); }} 
              className="p-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              Precio: alto-bajo
            </div>

            <div 
              onClick={() => { setOrder("promo"); setOpen(false); }} 
              className="p-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              Descuentos
            </div>

          </div>
        )}
      </div>
    </>
  );
}
