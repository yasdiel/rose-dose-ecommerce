import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import Loading from "./components/Loading"
import NavBar from "./components/NavBar"
import { useState } from "react"


const Home = lazy(() => import("./pages/Home"))
const Store = lazy(() => import("./pages/Store"))
const Cart = lazy(() => import("./pages/Cart"))
const Create = lazy(() => import("./pages/Create"))


function App() {

  const [carrito, setCarrito] = useState([])

  return (
    <>
      <Suspense fallback={<Loading/>}></Suspense>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/store" element={<Store carrito={carrito} setCarrito={setCarrito}/>}></Route>
        <Route path="/cart" element={<Cart setCarrito={setCarrito} carrito={carrito}/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
      <NavBar carrito={carrito} setCarrito={setCarrito}></NavBar>
    </>
  )
}

export default App
