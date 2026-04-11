import "./App.css";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { DetailsCar } from "./pages/DetailsCar";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Reservation } from "./pages/Reservation";
import { SuccessReservation } from "./pages/SuccessReservation";
import { Inicio } from "./pages/Inicio";
import { ThankYou } from "./pages/ThankYou";
import { History } from "./pages/History";

function App() {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<DetailsCar />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/success" element={<SuccessReservation />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App;
