import { Link } from "react-router-dom";
import { Mail, Lock, MoveRight } from "lucide-react";

export function ForgotPassword() {
    return (
        <div className="flex flex-col items-center">
            <img
                src="./logo-de-rentcars.png"
                alt="Logo de RentCars"
                style={{ width: "100%" }}
            />
        <h1 className="text-[#497ACE] font-bold text-[28px]">
            Recuperar Contraseña
        </h1>

        <div className="w-90 p-6 pt-3 flex flex-col gap-4">
            {/* Texto */}
            <p className="font-bold text-[16px]">Completa los Campos</p>

            {/* Input correo */}
            <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
                
                    <input
                    type="email"
                    placeholder="Correo" 
                    className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-2 focus:ring-[#497ACE]/50"
                    />
            </div>

            {/* Boton código */}
            <div className="flex gap-2">
                <button className="bg-[#497ACE] text-white font-bold px-4 h-11.25 rounded-[10px] shadow-[5px_7px_5px_rgba(0,0,0,0.28)]  whitespace-nowrap">
                    Enviar código
                </button>

                <input
                    type="text"
                    placeholder="Código"
                    className="border border-[#B9B9B9] rounded-[10px] pl-5 w-full bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
                />
            </div>

            {/* Nueva contraseña */}
            <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                        type="password"
                        placeholder="Contraseña nueva"
                        className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)] focus:outline-none"
                    />
            </div>

            {/* Confirmar contraseña con ICONO */}
            <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)] focus:outline-none"
                    />
            </div>

            {/* Botón siguiente */}
            <button className="bg-[#497ACE] text-white font-bold py-2 px-4 h-11.25 rounded-[10px] shadow-[5px_7px_5px_rgba(0,0,0,0.28)] flex justify-center items-center gap-2">
            Siguiente <MoveRight />
            </button>

            {/* Link login */}
            <div className="flex justify-center">
            <span>
                ¿Ya tienes una cuenta?
                <Link to="/login" className="text-[#FF960D] underline ml-2.5 font-bold">
                Inicia Sesión
                </Link>
            </span>
            </div>
        </div>
        </div>
    );
}
