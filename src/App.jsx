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
import PaymentSuccess from "./pages/PaymentSuccess";
import Riwayat from "./components/Riwayat";
import Result from "./components/Result";
import NotifikasiLogin from "./components/NotifikasiLogin";
import Flight from "./pages/Flight";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminUsers from "./pages/AdminUsers";
import AdminAirlines from "./pages/AdminAirlines";
import AdminAirports from "./pages/AdminAirports";
import AdminFlights from "./pages/AdminFlights";
import AdminBookings from "./pages/AdminBookings";
import AdminPassengers from "./pages/AdminPassengers";
import AdminSeats from "./pages/AdminSeats";
import AdminPayments from "./pages/AdminPayments";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./components/AboutUS";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/soldout" element={<SelectFlight />} />
          <Route path="/result/:depart/:arrive" element={<Result />} />
          <Route path="/result/:arrive" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/account" element={<Akun />} />
          <Route path="/history" element={<Riwayat />} />
          <Route path="/notifikasi" element={<NotifikasiLogin />} />
          <Route path="/checkout" element={<CheckoutCustomerData />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-airlines" element={<AdminAirlines />} />
          <Route path="/admin-airports" element={<AdminAirports />} />
          <Route path="/admin-flights" element={<AdminFlights />} />
          <Route path="/admin-bookings" element={<AdminBookings />} />
          <Route path="/admin-passengers" element={<AdminPassengers />} />
          <Route path="/admin-seats" element={<AdminSeats />} />
          <Route path="/admin-payments" element={<AdminPayments />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
