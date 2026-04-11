import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "../components/Stepper";

export function Reservation() {

const { state } = useLocation();
const navigate = useNavigate();

if (!state) return <div className="p-6">No hay datos</div>;

const { car, days, total, date } = state; // 👈 agregado date
const returnDate = date
? new Date(new Date(date).setDate(new Date(date).getDate() + days))
: null;

    return (
        <div className="p-6 flex flex-col gap-4">
            <Stepper step={2} />
            <h2 className="text-2xl text-[#497ACE] font-bold text-center">
                Resumen de Reserva
            </h2>

            {/* Imagen */}
            <img 
                src={car.img} 
                alt={car.name} 
                className="w-full rounded-xl"
        />

      {/* Información */}
        <div className=" bg-white rounded-2xl shadow-[5px_7px_5px_rgba(0,0,0,0.28)] p-5 flex flex-col gap-2">

            <span><strong>Vehículo:</strong> {car.name}</span>
            <span><strong>Marca:</strong> {car.brand}</span>
            <span><strong>Año:</strong> {car.year}</span>

            {/* Fecha */}
            <span>
                <strong>Fecha:</strong>{" "}
                {date ? new Date(date).toLocaleDateString() : "No seleccionada"}
            </span>

            <span>
                <strong>Devolución:</strong>{" "}
                {returnDate ? returnDate.toLocaleDateString() : "—"}
            </span>

            <span><strong>Días:</strong> {days}</span>
            <span><strong>Precio por día:</strong> S/. {car.price}</span>

        </div>
        {/* Total */}
        <div className="mt-4 p-4 bg-[#F6F9FE] rounded-xl shadow-[5px_7px_5px_rgba(0,0,0,0.28)]">
            <span className="text-lg font-bold">
                Total: S/. {total}
            </span>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 mt-4">

            <button 
                className="shadow-[5px_7px_5px_rgba(0,0,0,0.28)] w-full bg-[#497ACE] text-white py-3 rounded-xl text-[18px] font-semibold"
                onClick={() => navigate("/success", { state })}
                >
                Confirmar Reserva
            </button>

            <button 
                className="font-semibold text-[18px] shadow-[5px_7px_5px_rgba(0,0,0,0.28)] bg-white w-full border border-gray-300 py-3 rounded-xl"
                onClick={() => navigate(-1)}
                >
                Volver
            </button>

        </div>
    </div>
    );
}