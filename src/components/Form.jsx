import { useState } from "react"


export default function Form({product}){

    const [color, setColor] = useState("");
    const [design, setDesign] = useState("");
    const [details, setDetails] = useState("")
    const handleForm = () => {
        let mensaje = `Hola, quisiera personalizar un ${product.name}.\nColor: ${color}\nDiseño: ${design}\nDetalles adicionales: ${details}`;
        mensaje = encodeURIComponent(mensaje);
        window.open(`https://wa.me/5363287736?text=${mensaje}`, '_blank');
    }

    return(
        <section className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-[#fad6e8] pb-15 z-49">
            <form onSubmit={handleForm} className="w-95/100 max-w-100 p-2">
                <fieldset className="flex flex-col w-full border-2 border-pink-950 rounded-2xl p-2 md:p-3">
                    <legend className="table text-xl md:text-2xl text-pink-950 pr-1 pl-1 font-bold">{product.name}</legend>
                    <label className="text-pink-700 text-lg font-semibold" htmlFor="color">Color *</label>
                    <input onChange={(e) => setColor(e.target.value)} value={color} required id="color" className="border rounded border-pink-900 p-1" type="text" placeholder="Especifique claridad o tono" />
                    <label className="mt-2 text-pink-700 text-lg font-semibold" htmlFor="design">Diseño</label>
                    <select onChange={(e)=>{setDesign(e.target.value)}} value={design} className="border rounded border-pink-900 p-1" name="design" id="design">
                        <option className="text-gray-700" value="">Seleccione 1</option>
                        <option value="Marmoleado">Marmoleado</option>
                        <option value="Color Entero">Color Entero</option>
                        <option value="Flores">Flores</option>
                        <option value="Salpicado">Salpicado</option>
                    </select>
                    <label className="text-pink-700 text-lg font-semibold" htmlFor="details">Detalles adicionales *</label>
                    <textarea onChange={(e)=>{setDetails(e.target.value)}} value={details} required id="details" className="border rounded border-pink-900 min-h-40 p-1" placeholder="Me gustaria que tuviera..." />
                </fieldset>
                <button type="submit" className="w-full mt-3 bg-pink-500 hover:bg-pink-600 text-white font-bold  rounded text-xs py-2">Solicitar Costo</button>
            </form>
        </section>
    )
}