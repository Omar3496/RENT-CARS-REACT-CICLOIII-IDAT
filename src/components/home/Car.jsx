import { useNavigate } from "react-router-dom";

export function HomeCar({ id, name, price, year, brand, img }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    const car = { id, name, price, year, brand, img };

    // 🔥 guardar para evitar pérdida en simulador / refresh
    localStorage.setItem("car", JSON.stringify(car));

    navigate(`/details/${id}`);
  };

  return (
    <div className="bg-white rounded-[10px] active:scale-95 shadow-[5px_7px_5px_rgba(0,0,0,0.28)] h-45" onClick={handleDetailsClick}>
      <div className="flex justify-center items-center h-23.25">
        <img src={img} alt={name} className="w-full" />
      </div>
      <div className="flex flex-col  border-t border-[#B9B9B9] p-2.5 h-26.75">
        <span className="text-[#B9B9B9] text-[8px]">{brand} - {year}</span>
        <span className="mt-1.25 mb-2.5 font-bold text-[11px]">{name}</span>
        <span className="text-[#497ACE] font-bold text-[16px]">S/. {price} 
        <span className="text-[#B9B9B9] font-normal text-[8px]"> x dia</span>
        </span> 
      </div>
    </div>
  );
}
