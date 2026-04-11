import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa los campos");
      return;
    }

    // ✅ obtener TODOS los usuarios
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("No hay usuarios registrados");
      return;
    }

    // ✅ buscar usuario
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      alert("Credenciales incorrectas");
      return;
    }

    // ✅ guardar sesión
    localStorage.setItem("user", JSON.stringify(userFound));

    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src="./logo-de-rentcars.png"
        alt="Logo de RentCars"
        style={{ width: "100%" }}
      />

      <h1 className="text-[#497ACE] font-bold text-[28px]">
        Iniciar Sesión
      </h1>

      <div className="w-full p-7 flex flex-col gap-6">

        <div className="relative">
          <Mail className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow focus:outline-none focus:ring-2 focus:ring-[#497ACE]/50"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow focus:outline-none"
          />
        </div>

        <button
          onClick={handlerSubmit}
          className="bg-[#497ACE] text-white font-bold py-2 px-4 h-11 rounded-[10px] hover:bg-[#3a6cb0] shadow"
        >
          Iniciar Sesión
        </button>

        <div className="flex flex-col items-center gap-2">
          <span>
            ¿No tienes una cuenta?
            <a href="/register" className="text-[#FF960D] font-bold underline ml-2.5">
              Regístrate
            </a>
          </span>

          <Link
            to="/forgot-password"
            className="text-[#497ACE] text-[16px] font-bold underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

      </div>
    </div>
  );
}
