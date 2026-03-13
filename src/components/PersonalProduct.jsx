import Form from "./Form";



export default function PersonalProduct({product, setShowForm, setSelectedProduct}) {

    const handlePersonalize = (product) => {
        setSelectedProduct(product);
        setShowForm(true);
    };


    return (
            <div className="rounded p-1.5 w-95/100 max-w-80 bg-pink-100 flex flex-col justify-center items-center gap-1 mt-1.5">
                <img className="w-95/100" src={product.img} alt={product.name} />
                <div className="w-95/100 flex items-start justify-between flex-col">
                    <h2 className="md:text-xl text-pink-500 text-[1rem] font-extrabold">{product.name}</h2>
                </div>
                <button onClick={()=>{handlePersonalize(product)}} className="w-95/100 bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 rounded text-xs">Personalizar</button>
                            
            </div>
    );
}