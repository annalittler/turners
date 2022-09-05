import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import InsuranceHome from "./pages/InsuranceHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsuranceHome />} />
          <Route path="/insurance" element={<InsuranceHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
