import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CustomerReviews from "./pages/CustomerReviews"
import QuoteStep2 from "./pages/QuoteStep2"
import InsuranceHome from "./pages/InsuranceHome";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/customer-reviews"
                        element={<CustomerReviews />}
                    />
                    <Route path="/quote-step-2" element={<QuoteStep2 />} />
                    <Route path="/insurance" element={<InsuranceHome />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
