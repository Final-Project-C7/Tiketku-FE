import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Homepage from "./pages/Homepage/Homepage";
import SelectFlight from "./pages/Homepage/SelectFlight";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selectflight" element={<SelectFlight />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
