import { useNavigate } from "react-router-dom";

export function History() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">
          Debes iniciar sesión
        </h2>

        <button
          onClick={() => navigate("/login")}
          className="bg-[#3E546D] text-white px-6 py-3 rounded-xl"
        >
          Ir a login
        </button>
      </div>
    );
  }

  const history = JSON.parse(
    localStorage.getItem(`history_${user.email}`)
  ) || [];

  return (
    <div className="min-h-screen bg-[#F2F4F7] p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-[#497ACE] text-[28px] font-bold  border-[#3E546D] inline-block">
          Historial de Alquiler
        </h1>
        <p className="text-[18px] font-semibold text-gray-400 mt-3">
          Tus vehículos alquilados
        </p>
      </div>

      {/* LISTA */}
      {history.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          No tienes reservas aún 🚗
        </div>
      ) : (
        <div className="flex flex-col gap-4">

          {history.map((item, index) => {

            const returnDate = new Date(item.date);
            returnDate.setDate(returnDate.getDate() + item.days);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[5px_7px_5px_rgba(0,0,0,0.28)] flex overflow-hidden"
              >

                {/* IMAGEN */}
                <div className="w-1/2 flex items-center justify-center bg-gray-100">
                  <img
                    src={item.car.img}
                    alt={item.car.name}
                    className="w-full object-contain p-3"
                  />
                </div>

                {/* INFO */}
                <div className="w-1/2 p-4 flex flex-col justify-center">

                  <h3 className="font-bold text-sm mb-2">
                    {item.car.name}
                  </h3>

                  <span className="text-gray-400 text-xs mb-2">
                    📅 {new Date(item.date).toLocaleDateString()} - {item.days} días
                  </span>

                  <span className="text-[#497ACE] font-bold text-sm">
                    S/. {item.total}
                  </span>

                </div>

              </div>
            );
          })}

        </div>
      )}

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => navigate("/home")}
        className="w-full mt-6 bg-[#3E546D] text-white py-3 rounded-xl font-semibold shadow-[5px_7px_5px_rgba(0,0,0,0.28)]"
      >
        Volver al inicio
      </button>

    </div>
  );
}