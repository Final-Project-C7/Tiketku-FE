import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import SelectFlight from "./pages/SelectFlight";
import Homepage from "./pages/Homepage";
import NavbarUser from "./components/NavbarUser";
import CheckoutCustomerData from "./components/CheckoutCustomerData";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user" element={<NavbarUser />} />
          <Route path="/selectflight" element={<SelectFlight />} />
          <Route path="/checkout" element={<CheckoutCustomerData />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/reset-password" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
