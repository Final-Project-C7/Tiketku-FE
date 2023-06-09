import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import SelectFlight from "./pages/SelectFlight";
import ResultSelectFlight from "./pages/ResultSelectFlight";
import Homepage from "./pages/Homepage";
import Soldout from "./pages/soldout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resultselectflight" element={<ResultSelectFlight />} />
          <Route path="/selectflight" element={<SelectFlight />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/soldout" element={<Soldout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
