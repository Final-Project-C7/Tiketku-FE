import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import SelectFlight from "./pages/SelectFlight";
import Homepage from "./pages/Homepage";
import Akun from "./pages/Akun";
import CheckoutCustomerData from "./components/CheckoutCustomerData";
import Payment from "./components/Payment";
import Riwayat from "./components/Riwayat";
import Result from "./components/Result";
import Notifikasi from "./components/NotifikasiLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/result" element={<Result />} />
          <Route path="/userhistory" element={<Riwayat />} />
          <Route path="/selectflight" element={<SelectFlight />} />
          <Route path="/checkout" element={<CheckoutCustomerData />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/notifikasilogin" element={<Notifikasi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
