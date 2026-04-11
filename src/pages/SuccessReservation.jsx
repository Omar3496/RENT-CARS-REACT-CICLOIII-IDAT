import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Stepper } from "../components/Stepper";

export function SuccessReservation() {

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-6">No hay datos</div>;

  const { car, days, total, date } = state;

  const returnDate = date
    ? new Date(new Date(date).setDate(new Date(date).getDate() + days))
    : null;

    return (
        <div className="p-6 flex flex-col items-center gap-6">
            <Stepper step={3} />

        {/* ✅ Círculo azul con check */}
        <div className="w-20 h-20 bg-[#497ACE] rounded-full flex items-center justify-center">
            <Check size={40} className="text-white" />
        </div>

        {/* Título */}
        <h2 className="text-[#497ACE] text-[22px] font-bold text-center">
            Reserva Confirmada
        </h2>

        {/* Resumen */}
            <div className="shadow-[5px_7px_5px_rgba(0,0,0,0.28)] w-full bg-[#F6F9FE] p-4 rounded-xl flex flex-col gap-2">

            <span><strong>Vehículo:</strong> {car.name}</span>
            <span><strong>Marca:</strong> {car.brand}</span>

            <span>
            <strong>Fecha:</strong>{" "}
            {date ? new Date(date).toLocaleDateString() : "-"}
            </span>

            <span>
            <strong>Devolución:</strong>{" "}
            {returnDate ? returnDate.toLocaleDateString() : "-"}
            </span>

            <span><strong>Días:</strong> {days}</span>

            <span className="mt-2 font-bold">
            Total: S/. {total}
            </span>
        </div>

        {/* Botón */}
        <button
        onClick={() => navigate("/thank-you")}
        className="w-full bg-[#497ACE] text-white text-[18px] font-semibold py-3 rounded-xl shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
        >
        Aceptar
        </button>

    </div>
);
}