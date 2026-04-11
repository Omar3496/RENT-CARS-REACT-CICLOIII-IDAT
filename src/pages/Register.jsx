import { useState } from "react";
import { RegisterFirstSteep } from "../components/register/FristSteep";
import { RegisterSecondSteep } from "../components/register/SecondSteep";

export function Register() {

  const [steep, setSteep] = useState(1);
  const [isCompleteSteepOne, setIsCompleteSteepOne] = useState(false);

  // ✅ nuevos estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handlerSecondSteep = () => {
    setIsCompleteSteepOne(true);
    setSteep(2);
  }

  const handlerBackSteep = () => {
    setSteep(1);
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src="./logo-de-rentcars.png"
        alt="Logo de RentCars"
        style={{ width: "100%" }}
      />
      <h1 className="text-[#497ACE] font-bold mb-5 text-[28px]">Registro</h1>

      {/* STEPPER */}
      <div className="flex gap-12 relative items-center">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>

        <div
          className={`absolute top-1/2 left-0 h-1 transform -translate-y-1/2 transition-all duration-300 ${
            steep === 1 ? "w-1/2 bg-[#3E546D]" : "w-full bg-[#28BC3E]"
          }`}
        ></div>

        <div className={(steep === 1 ? "bg-[#3E546D] text-white" : isCompleteSteepOne ? "bg-[#28BC3E] text-white": "") + " w-10.5 h-10.5 rounded-full flex items-center justify-center relative z-10"}>1</div>

        <div className={(steep === 2 ? "bg-[#3E546D] text-white" : "bg-white text-black") + " w-10.5 h-10.5 rounded-full flex items-center justify-center relative z-10"}>2</div>
      </div>

      <div className="w-full px-7 mt-5 font-bold text-[16px]">
        <h2>Completa los campos</h2>
      </div>

      <form className="w-full mt-5 mb-10 px-7 flex flex-col gap-6">
        {
          steep === 1 
          ? (
            <RegisterFirstSteep 
              handlerSecondSteep={handlerSecondSteep}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          )
          : (
            <RegisterSecondSteep 
              handlerBackSteep={handlerBackSteep}
              email={email}
              password={password}
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
            />
          )
        }

        <div className="flex justify-center">
          <span>
            ¿No tienes una cuenta?
            <a href="/login" className="text-[#FF960D] font-semibold underline ml-2.5">
              Inicia sesión
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}
