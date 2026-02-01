import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./homepage";
import SedanPage from "./sedanpage";
import SUVPage from "./suvpage";
import LuxuryPage from "./luxurypage";
import ElectricPage from "./electricpage";
import BookingAndPayment from "./booking_payment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sedanpage" element={<SedanPage />} />
      <Route path="/suvpage" element={<SUVPage />} />
      <Route path="/luxurypage" element={<LuxuryPage />} />
      <Route path="/electricpage" element={<ElectricPage />} />
      <Route path="/booking_payment" element={<BookingAndPayment />} />
    </Routes>
  );
};

export default App;
