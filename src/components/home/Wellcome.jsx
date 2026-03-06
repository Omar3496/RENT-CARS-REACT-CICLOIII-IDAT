import { Characteristics } from '../details/Characteristics'

export function Wellcome() {
  return (
    <div className="wellcome-card">
      <span><strong>Hola, Jhon Jone 👋</strong></span>
      <span>¿Qué Vehículo deseas alquilar hoy?</span>
      <input type="text" className="txt-serch" placeholder="Buscar..." />
    </div>
  );
}
