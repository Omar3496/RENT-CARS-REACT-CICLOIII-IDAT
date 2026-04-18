import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "../components/Stepper";

export function Reservation() {
    const location = useLocation();
    const navigate = useNavigate();

    // 🔥 SOLO usar state de navegación
    const state =
    location.state ||
    JSON.parse(localStorage.getItem("reservation") || "null");

    // 🚨 VALIDACIÓN SEGURA
    if (!state || !state.car) {
        return (
            <div className="p-6 flex flex-col gap-3">
                <h2 className="text-lg font-bold">
                    No hay datos del vehículo
                </h2>

                <button
                    onClick={() => navigate("/home")}
                    className="bg-[#497ACE] text-white py-2 px-4 rounded-xl"
                >
                    Volver al inicio
                </button>
            </div>
        );
    }

    const { car, days, total, date } = state;

    const returnDate = date
        ? new Date(
            new Date(date).setDate(
                new Date(date).getDate() + Number(days)
            )
        )
        : null;

    return (
        <div className="p-6 flex flex-col gap-4">
            <Stepper step={2} />

            <h2 className="text-2xl text-[#497ACE] font-bold text-center">
                Resumen de Reserva
            </h2>

            <img
                src={car.img}
                alt={car.name}
                className="w-full rounded-xl"
            />

            <div className="bg-white rounded-2xl p-5 flex flex-col gap-2">
                <span>
                    <strong>Vehículo:</strong> {car.name}
                </span>
                <span>
                    <strong>Marca:</strong> {car.brand}
                </span>
                <span>
                    <strong>Año:</strong> {car.year}
                </span>

                <span>
                    <strong>Fecha:</strong>{" "}
                    {date
                        ? new Date(date).toLocaleDateString()
                        : "No seleccionada"}
                </span>

                <span>
                    <strong>Devolución:</strong>{" "}
                    {returnDate
                        ? returnDate.toLocaleDateString()
                        : "—"}
                </span>

                <span>
                    <strong>Días:</strong> {days}
                </span>

                <span>
                    <strong>Precio por día:</strong> S/. {car.price}
                </span>
            </div>

            <div className="mt-4 p-4 bg-[#F6F9FE] rounded-xl">
                <span className="text-lg font-bold">
                    Total: S/. {total}
                </span>
            </div>

            <button
                onClick={() => navigate("/success", { state })}
                className="w-full bg-[#497ACE] text-white py-3 rounded-xl"
            >
                Confirmar Reserva
            </button>
        </div>
    );
}