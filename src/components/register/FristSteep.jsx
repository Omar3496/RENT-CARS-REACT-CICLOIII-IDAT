import { MoveRight, Mail, Lock } from "lucide-react";

export function RegisterFirstSteep({ handlerSecondSteep, email, setEmail, password, setPassword }) {

  const handleNextSteep = () => {
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }
    handlerSecondSteep();
  };

  return (
    <>
      <div className="relative">
        <Mail className="absolute left-4 top-3.5 text-[#B9B9B9]" size={20} />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          type="password"
          placeholder="Contraseña nueva"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 rounded-[10px] pl-12 pr-4 w-full h-12 bg-white shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
        />
      </div>

      <button
        className="bg-[#497ACE] text-white font-bold py-2 mt-6 px-4 h-11 rounded-[10px] flex items-center justify-center gap-1.5"
        onClick={handleNextSteep}
      >
        <span>Siguiente</span>
        <MoveRight />
      </button>
    </>
  );
}
