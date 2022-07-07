import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Regitster from "./pages/Regitster"
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/register" element={<Regitster />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/products/:id" element={<Product />} />
			</Routes>
		</>
	)
}

export default App
