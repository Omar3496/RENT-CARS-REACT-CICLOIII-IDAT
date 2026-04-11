import { useNavigate } from "react-router-dom";
import { User, Dock, CalendarDays, Phone } from "lucide-react";
import { useState } from "react";

export function RegisterSecondSteep({ 
  handlerBackSteep,
  email,
  password,
  name,
  setName,
  lastName,
  setLastName
}) {

  const navigate = useNavigate();

  // estados
  const [motherLastName, setMotherLastName] = useState("");
  const [license, setLicense] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !name ||
      !lastName ||
      !motherLastName ||
      !license ||
      !birthDate ||
      !phone ||
      !gender
    ) {
      alert("Completa todos los campos");
      return;
    }

    const newUser = {
      name: name + " " + lastName,
      email,
      password,
      motherLastName,
      license,
      birthDate,
      phone,
      gender
    };

    // ✅ OBTENER USUARIOS EXISTENTES
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔥 VALIDAR SI YA EXISTE EL CORREO
    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert("Este correo ya está registrado");
      return;
    }

    // ✅ AGREGAR NUEVO USUARIO
    users.push(newUser);

    // ✅ GUARDAR LISTA COMPLETA
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ INICIAR SESIÓN AUTOMÁTICA
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Registro exitoso 🎉");

    navigate("/home");
  };

  return (
    <>
      {/* NOMBRE */}
      <div className="relative">
        <User className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="text"
          placeholder="Nombres"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* APELLIDO PATERNO */}
      <div className="relative">
        <User className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="text"
          placeholder="Apellido Paterno"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* APELLIDO MATERNO */}
      <div className="relative">
        <User className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="text"
          placeholder="Apellido Materno"
          value={motherLastName}
          onChange={(e) => setMotherLastName(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* LICENCIA */}
      <div className="relative">
        <Dock className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="text"
          placeholder="Licencia de Conducir"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* FECHA NACIMIENTO */}
      <div className="relative">
        <CalendarDays className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* CELULAR */}
      <div className="relative">
        <Phone className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="text"
          placeholder="Número de Celular"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow"
        />
      </div>

      {/* GÉNERO */}
      <div>
        <span className="text-[#A2A2A2] font-semibold text-[16px]">Sexo</span>
        <div className="mt-3 text-[14px] flex">
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label>Masculino</label>
          </div>

          <div className="flex items-center ml-12">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label>Femenino</label>
          </div>
        </div>
      </div>

      {/* BOTONES */}
      <div className="flex justify-between gap-3">
        <button
          className="bg-white border border-gray-300 font-bold rounded-[10px] w-1/2 h-11"
          onClick={handlerBackSteep}
        >
          Volver
        </button>

        <button
          className="bg-[#497ACE] text-white font-bold rounded-[10px] w-1/2 h-11"
          onClick={handlerSubmit}
        >
          Regístrate
        </button>
      </div>
    </>
  );
}
