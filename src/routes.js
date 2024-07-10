import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/cart" element={ <CartPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;