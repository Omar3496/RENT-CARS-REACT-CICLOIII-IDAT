import { DetailsCarCharacter } from "../components/deatilscar/Character";
import { Users, Settings, Settings2, LayoutGrid } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Stepper } from "../components/Stepper";

export function DetailsCar() {

    const characters = [
        { icon: <Users />, name: "Asientos", value: "5" },
        { icon: <Settings />, name: "Transmisión", value: "Automatico" },
        { icon: <Settings2 />, name: "Combustible", value: "Gasolina" },
        { icon: <LayoutGrid />, name: "Tipo", value: "SUV" }
    ];

    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    const [days, setDays] = useState(1);
    const [date, setDate] = useState("");

    // 🔥 SOLUCIÓN SEGURA
    const car = state?.car || JSON.parse(localStorage.getItem("car"));

    if (!car) return <div>No hay datos</div>;

    const total = Number(car.price) * days;

    const handleReserve = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Para continuar con la reserva necesitas iniciar sesión");
            return;
        }

        if (!date) {
            alert("Selecciona una fecha para continuar");
            return;
        }

        const newReservation = {
            car,
            days,
            total,
            date
        };

        console.log("STATE ANTES DE NAVEGAR:", newReservation);

        // 🔥 IMPORTANTE: guardar reserva global (esto arregla Reservation.jsx)
        localStorage.setItem("reservation", JSON.stringify(newReservation));

        // 🔥 historial del usuario (lo mantienes igual)
        const key = `history_${user.email}`;
        const history = JSON.parse(localStorage.getItem(key)) || [];
        history.push(newReservation);
        localStorage.setItem(key, JSON.stringify(history));

        navigate("/reservation", {
            state: newReservation
        });
    };

    return (
        <div className="flex flex-col">

            <div>
                <img src={car.img} alt="" className="w-full" />
            </div>

            <Stepper step={1} />

            <div className="m-7.5 flex flex-col gap-3.75">
                <span className="text-[#4B5563] text-[12px]">
                    {car.brand} - {car.year}
                </span>

                <span className="font-bold text-[24px]">
                    {car.name}
                </span>

                <span translate="no" className="text-[#497ACE] font-bold text-[24px]">
                    S/. {car.price}{" "}
                    <span className="text-[#4B5563] font-normal text-[12px]">
                        x día
                    </span>
                </span>
            </div>

            <div className=" grid grid-cols-2 mx-7.5 gap-5">
                {characters.map((character, index) => (
                    <DetailsCarCharacter
                        key={index}
                        icon={character.icon}
                        name={character.name}
                        value={character.value}
                    />
                ))}
            </div>

            <div className="m-7.5">
                <span className="font-bold">Reserva tu vehículo</span>

                <form className="bg-[#F6F9FE] rounded-[10px] mt-4">
                    <div className="p-7.5">

                        <label>Fecha</label>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border border-[#B9B9B9] text-[#4B5563] rounded-[10px] p-2.5 mt-1.25 mb-7.5 shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
                        />

                        <label className="block mb-2">
                            Cantidad de Días
                        </label>

                        <div className="flex items-center">

                            <input
                                type="button"
                                value="-"
                                onClick={() => setDays(days > 1 ? days - 1 : 1)}
                                className="w-12 h-12 bg-white border border-[#B9B9B9] rounded-l-[10px] shadow-[0px_7px_0px_rgba(0,0,0,0.25)]"
                            />

                            <input
                                type="text"
                                value={days}
                                readOnly
                                className="w-12 h-12 border-y border-[#B9B9B9] text-center shadow-[0px_7px_0px_rgba(0,0,0,0.25)]"
                            />

                            <input
                                type="button"
                                value="+"
                                onClick={() => setDays(days + 1)}
                                className="w-12 h-12 bg-white border border-[#B9B9B9] rounded-r-[10px] shadow-[0px_7px_0px_rgba(0,0,0,0.25)]"
                            />

                        </div>

                    </div>

                    <div className="border-t-2 border-[#B9B9B9] p-7.5 grid grid-cols-2">
                        <span>Precio x día</span>
                        <span className="text-end">S/. {car.price}</span>

                        <span className="pt-5.5">Precio Total</span>
                        <span className="text-end pt-5.5">S/. {total}</span>
                    </div>
                </form>

                <button
                    onClick={handleReserve}
                    className="w-full bg-[#497ACE] text-white py-3 rounded-xl mt-4"
                >
                    Reservar
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="w-full bg-white py-3 rounded-xl border mt-3"
                >
                    Volver
                </button>

            </div>
        </div>
    );
}