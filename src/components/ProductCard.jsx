import { addToCart, buyProduct } from "../helpers/helpers";

export default function ProductCard({setMessage, product, setIsOpen, setCurrent, carrito, setCarrito}) { 
    return (
        <div className="rounded p-1.5 w-47/100 max-w-75 bg-pink-100 flex flex-col justify-center items-center gap-1 mt-1.5">
            <img onClick={() => {setCurrent(product);setIsOpen(true);}} className="w-95/100" src={product.img} alt={product.name} />
            <div className="w-95/100 flex items-start justify-between flex-col">
                <h2 className="md:text-xl text-pink-500 text-[1rem] font-extrabold">{product.name}</h2>
                <p className="text-gray-600 text-[0.875rem]">{product.price} CUP</p>
            </div>
            <div className="w-95/100 flex gap-0.5 justify-between flex-row mt-2">
                <button onClick={()=> addToCart(carrito, setCarrito, product, setMessage)} data-set={product.name} className="w-1/2 bg-pink-500 hover:bg-pink-600 text-white font-bold  rounded text-xs py-1">Agregar</button>
                <button onClick={()=> buyProduct(product)} data-set={product.name} className="w-1/2 bg-pink-950 hover:bg-pink-600 text-white font-bold py-1 rounded text-xs ">Comprar</button>
            </div>
                
        </div>
    )
}