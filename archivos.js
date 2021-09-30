class producto {
    constructor(codigo, nombre, precio,) {
        this.codigo = codigo.toUpperCase();
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.hayStock = false;
    }
    precioFinal() {
        this.precio = this.precio * 1.30;
    }
    hayStock() {
        this.hayStock = true;
    }
}
const correa = new producto("42280", "Correa de nylon 10mts", "1700");
const hueso = new producto("42460", "Hueso comestible 100% organico","1600 ");

correa.precioFinal();
hueso.precioFinal();

function agregarACarrito(){
    alert("Agregaste " + correa.nombre +" al carrito " + ". Su valor con IVA es $" + correa.precio);
}

function agregarHueso(){
    alert("Agregaste " + hueso.nombre +" al carrito " + ". Su valor con IVA es $" + hueso.precio);
}

console.log(producto);
