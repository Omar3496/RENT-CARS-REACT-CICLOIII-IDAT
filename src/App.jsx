import "./App.css";
import { Wellcome } from "./components/home/Wellcome";
import { Characteristics } from "./components/details/Characteristics";

function App() {
  return (
    <>
      <Wellcome />

      <div className="characteristics">
        <Characteristics icon={"⚙️"} title={"Asientos"} desc={"5"} />
        <Characteristics
          icon={"⚙️"}
          title={"Transmisión"}
          desc={"Automatico"}
        />
        <Characteristics icon={"⚙️"} title={"Combustible"} desc={"Gasolina"} />
        <Characteristics icon={"⚙️"} title={"Tipo"} desc={"SUV"} />
      </div>
    </>
  );
}

export default App;
