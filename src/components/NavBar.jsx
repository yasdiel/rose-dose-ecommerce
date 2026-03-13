import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useLocation } from "react-router-dom"

export default function NavBar({carrito}){

    const location = useLocation()

    return (
        <header className="w-full fixed bottom-0 left-0 p-2 bg-pink-400 z-50">
            <nav className="w-full flex flex-row justify-evenly">
                <div className={`${location.pathname === '/' ? 'border-2 border-white' : ''} rounded-xl p-1 flex flex-col items-center`}>
                    <Icon className="w-4 h-4 text-white" icon={'line-md:home'}></Icon>
                    <Link className="text-white text-xs" to={'/'}>Inicio</Link>
                </div>
                <div className={`${location.pathname === '/store' ? 'border-2 border-white' : ''} rounded-xl p-1 flex flex-col items-center`}>
                    <Icon className="w-4 h-4 text-white" icon={'lucide:store'}></Icon>
                    <Link className="text-white text-xs" to={'/store'}>Tienda</Link>
                </div>
                <div className={`${location.pathname === '/create' ? 'border-2 border-white' : ''} rounded-xl p-1 flex flex-col items-center`}>
                    <Icon className="w-4 h-4 text-white" icon={'hugeicons:magic-wand-01'}></Icon>
                    <Link className="text-white text-xs" to={'/create'}>Crear</Link>
                </div>
                <div className={`${location.pathname === '/cart' ? 'border-2 border-white' : ''} rounded-xl p-1 flex flex-col items-center relative`}>
                    <Icon className="w-4 h-4 text-white" icon={'ic:outline-shopping-cart'}></Icon>
                    <span className="absolute -top-1 right-0  text-white text-xs rounded flex items-center justify-center font-bold p-0.75">{carrito.length}</span>
                    <Link className="text-white text-xs" to={'/cart'}>Carrito</Link>
                </div>
            </nav>
        </header>
    )
}