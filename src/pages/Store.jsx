import ProductCard from "../components/ProductCard"
import Message from "../components/Message"
import { useState } from "react"

export default function Store({carrito, setCarrito}) {

    const [isOpen, setIsOpen] = useState(false)
    const [current, setCurrent] = useState(null)
    const [message, setMessage] = useState(false)

    return (
        <main className="w-full  md:pb-30 pb-20 flex flex-col items-center">
            <div className="w-full md:h-80 h-60  relative">
                <img className="z-10 absolute top-0 left-0 h-full w-full" src="/assets/bg-create.webp" alt="" />
                <div className="absolute top-0 left-0 h-full w-full z-11 bg-linear-to-t bg-[linear-gradient(rgba(255,255,255,0),#fad6e8)]"></div>
                <h1 className="text-3xl font-bold text-pink-500 mb-4 absolute bottom-0 left-4 z-40 b">Tienda</h1>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Duo Atardecer", price: 2000, img: "/assets/products/product-1.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Duo Limonada", price: 2000, img: "/assets/products/product-2.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Duo Primavera", price: 2000, img: "/assets/products/product-3.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Duo Rosita", price: 2000, img: "/assets/products/product-4.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Corazón de luna", price: 850, img: "/assets/products/product-5.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Tocororo", price: 850, img: "/assets/products/product-6.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Al mar", price: 1000, img: "/assets/products/product-7.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Limoncitos", price: 800, img: "/assets/products/product-8.webp"}} />
                <ProductCard setMessage={setMessage}  setIsOpen={setIsOpen} setCurrent={setCurrent} carrito={carrito} setCarrito={setCarrito} product={{name: "Lacito", price: 500, img: "/assets/products/product-9.webp"}} />
                
            </div>

            {isOpen && <div onClick={()=>setIsOpen(false)} className="w-full z-900 h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center"><img className="md:w-50/100 w-95/100" src={current?.img} alt={current?.name} /></div>
            }
            {message && <Message />}
        </main>
    )
}