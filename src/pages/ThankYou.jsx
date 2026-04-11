import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Stepper } from "../components/Stepper";

export function ThankYou() {

  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col items-center gap-6">

      {/* Stepper FINAL */}
      <Stepper step={4} />

      {/* Check */}
      <div className="w-20 h-20 bg-[#497ACE] rounded-full flex items-center justify-center shadow-md">
        <Check size={40} className="text-white" />
      </div>

      {/* Título */}
      <h2 className="text-[#497ACE] text-[22px] font-bold text-center">
        ¡Gracias por tu reserva!
      </h2>

      {/* Texto */}
      <div className="bg-white rounded-2xl shadow-[5px_7px_5px_rgba(0,0,0,0.28)] p-5 text-center max-w-sm border border-gray-100">
        <p className="text-center text-gray-600 max-w-xs">
            Tu reserva se realizó correctamente 🚗  
            Te esperamos en la fecha seleccionada.
            Si deseas realizar algún cambio o cancelación de la reserva puedes escribirnos a nuestro WhatSapp
            Un asesor se contactará contigo en los proximos minutos para completar el pago de tu reserva.
        </p>
      </div>
      {/* Botón */}
      <button
        onClick={() => {
            const user = JSON.parse(localStorage.getItem("user"));

            if (user) {
                navigate("/home", { replace: true });
            } else {
                navigate("/inicio", { replace: true });
            }
        }}
        className="shadow-[5px_7px_5px_rgba(0,0,0,0.28)] font-semibold text-[18px] w-full bg-[#497ACE] text-white py-3 rounded-xl mt-4 hover:opacity-90 transition"
      >
        Ir al inicio
      </button>

    </div>
  );
}