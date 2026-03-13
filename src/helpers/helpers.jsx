export function addToCart(carrito, setCarrito, product, setMessage) {
    setCarrito([...carrito, product]);
    setMessage(true)

    setTimeout(() => {
        setMessage(false)
    }, 2000);
}

export function removeFromCart(carrito, setCarrito, product){
    if (carrito.length > 0){
        setCarrito(carrito.filter(actualProduct => actualProduct.name !== product.name))
    
    }
}



export function buyProduct(product) {
    let mensaje = 'Hola, me gustaría comprar el producto: ' + product.name;
    let url = 'https://wa.me/5363287736?text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

export function fullPrice(carrito){
    let precio = 0
    carrito.forEach(product => {
        precio += product.price
    });
    return precio

}

export function formatMessage(carrito, precioFinal){
    let mensaje = 'Hola, estoy interesado en los siguientes productos: \n'
    carrito.forEach(product => {
        mensaje += `*${product.name}* \n`

    });
    mensaje += `Para un precio final de ${precioFinal} CUP`
    return encodeURIComponent(mensaje)
}

export function generateId() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,10)
}