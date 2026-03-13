import { Link } from "react-router-dom"

export default function Home(){
    return (
        <>
            <main className="w-full min-h-screen flex flex-col items-center justify-center  md:pb-30 pb-8">
                <img className="md:mt-2 w-8/10 max-w-100 rounded-2xl" src="/assets/logo.jpg" alt="Rose Dose Logo" />
                <h1 className="mt-2 text-center md:text-3xl text-2xl font-bold">Una dosis de color <br /> <span className="italic text-pink-400">para tu mundo</span>
                </h1>
                <p className="text-center md:text-xl text-xs text-gray-600 mt-3 font-light">Piezas únicas de yeso pintadas a mano con amor.</p>
                <div className="flex flex-col mt-5 justify-center md:min-w-5/10 min-w-8/10 gap-2">
                    <Link className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full" to={'/store'}>
                        Ver productos
                    </Link>
                    <Link className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full" to={'/create'}>
                        Crear tu pieza
                    </Link>
                    <Link className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full" to={'https://wa.me/5363287736?text=Hola%20Rose%20Dose%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20productos!'} target="_blank">
                        Contáctanos
                    </Link>
                </div>
            </main>
        </>
    )
}