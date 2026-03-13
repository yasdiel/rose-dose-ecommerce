import { fullPrice, formatMessage, removeFromCart, generateId } from "../helpers/helpers"

export default function Cart({carrito, setCarrito}){

    let precioFinal = fullPrice(carrito)
    let mensaje = formatMessage(carrito,precioFinal)

    return (
        <main className="w-full p-1 md:pb-30 pb-20 flex flex-col items-center ">
            <h1 className="text-3xl font-bold text-pink-500 mb-4">Carrito</h1>
            <section className="w-full flex flex-col">
                <div className="w-full flex flex-wrap justify-evenly">
                    {carrito.map(product => (
                        <div className="rounded p-1.5 w-47/100 max-w-75 bg-pink-100 flex flex-col justify-center items-center gap-1 mt-1.5" key={generateId()}>
                            <img onClick={() => {setCurrent(product);setIsOpen(true);}} className="w-95/100" src={product.img} alt={product.name} />
                            <div className="w-95/100 flex items-start justify-between flex-col">
                                <h2 className="md:text-xl text-pink-500 text-[1rem] font-extrabold">{product.name}</h2>
                                <p className="text-gray-600 text-[0.875rem]">{product.price} CUP</p>
                            </div>
                            <div className="w-95/100 flex gap-0.5 justify-between flex-row mt-2">
                                <button onClick={()=> removeFromCart(carrito, setCarrito, product)} className="w-full bg-red-600 hover:red-800 text-white font-bold  rounded text-xs py-1">Eliminar</button>
                                
                            </div>
                                        
                        </div>
            ))}
                </div>
                <div className=" w-full flex flex-col items-center justify-center">
                    <h3 className="mt-4 text-xl"><span className="font-bold text-pink-600">Precio Final: </span>{`${precioFinal}`} CUP</h3>
                    <button onClick={() => {
                        if (carrito.length > 0){
                            window.open(`https://wa.me/5363287736?text=${mensaje}`)
                        } else {
                            window.alert('Primero debe agregar algo al carrito para poder comprar')
                        }
                    }} className="mt-3 font-bold md:w-auto bg-pink-700 text-white px-10 py-1 rounded w-95/100">COMPRAR</button>
                </div>
            </section>
        

            
        </main>
    )
}