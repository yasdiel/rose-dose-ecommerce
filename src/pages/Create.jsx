import PersonalProduct from "../components/PersonalProduct"
import { useState } from "react"
import Form from "../components/Form";

export default function Create(){
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    return (
        <>
            <main className="w-full md:pb-30 pb-20 flex flex-col items-center">
                <div className="w-full md:h-80 h-60  relative">
                    <img className="z-10 absolute top-0 left-0 h-full w-full" src="/assets/bg-store.webp" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-11 bg-linear-to-t bg-[linear-gradient(rgba(255,255,255,0),#fad6e8)]"></div>
                    <h1 className="absolute md:text-3xl text-2xl font-bold z-40 bottom-7 left-1 ">Tu pieza, tu estilo</h1>
                    <p className="absolute z-40 bottom-1 italic text-pink-500 md:text-lg left-1">Creemos algo unico para ti</p>
                </div>
                <div className="w-full flex flex-wrap justify-evenly mt-4">
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Plato pequeño", img: "/assets/personalizar/personalizar-1.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Portavelas/joyero liso", img: "/assets/personalizar/personalizar-2.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Plato pequeño de corazón", img: "/assets/personalizar/personalizar-3.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Portavelas/joyero estríado", img: "/assets/personalizar/personalizar-4.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Bandeja ovalada", img: "/assets/personalizar/personalizar-5.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Bandeja circular", img: "/assets/personalizar/personalizar-7.webp"}} />
                    <PersonalProduct setSelectedProduct={setSelectedProduct} setShowForm={setShowForm}  product={{name: "Porta incienzos irregular", img: "/assets/personalizar/personalizar-6.webp"}} />
        
                </div>
            </main>
            {showForm && <Form product={selectedProduct} />}
        </>
        
    )
}