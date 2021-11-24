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

let planillaProductos = document.getElementById('planilla')
let contenidoPlanilla =''

const productos = [
    { id: 42235,  nombre: "Vital Can Complete Adulto Raza mediana", precio: 4500 },
    {  id: 42442,  nombre: "Vital Can Balanced Adulto Raza pequeña", precio: 3.600 },
    {  id: 42257,  nombre: "Eukanuba Adulto Raza Grande"  , precio: 5200},
    {  id: 42311,  nombre: "Royal Canin Mini +7 años" , precio: 7100}];
    
 console.log(productos.length);
 
for (let index = 0; index < productos.length; index++) {
    let planilla = productos[index]
    contenidoPlanilla += `<li class="table-row">
    <div class="col col-1" data-label="Codigo">${planilla.id}</div>
    <div class="col col-2" data-label="Nombre del producto">${planilla.nombre}</div>
    <div class="col col-3" data-label="Precio">$${planilla.precio}</div>
    <div class="col col-4" data-label="Stock">Disponible</div>
    <button class="carrito" id='${planilla.id}'>Añadir al carrito</button>
    </li>`;
}

planillaProductos.innerHTML += contenidoPlanilla;

for (let index = 0; index < productos.length; index++) {
    let planilla = productos[index]

let cambio = document.getElementById(planilla.id)
cambio.onclick = () => cambio.innerHTML = "Añadido"
};

let contenedor = document.createElement("div");
    
    contenedor.innerHTML = ` <h1><strong> Productos</strong> </h1>`;

    document.getElementById('textoProductos').appendChild(contenedor)

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=comida-de-perro')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let contenido = '';
        for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index];
            contenido += `<li class="table-row">
            <div class="col col-1" data-label="Codigo">${element.id}</div>
            <div class="col col-2" data-label="Nombre del producto">${element.title}</div>
            <div class="col col-3" data-label="Precio">$${element.price}</div>
            <div class="col col-4" data-label="Stock">Disponible</div>
            <button class="carrito" id='${element.id}'>Añadir al carrito</button>
            </li>`;
        }
        planillaProductos.innerHTML += contenido;
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

//No entiendo porque no funciona la API de abajo//

let planillaAccesorios = document.getElementById('planillaAccesorios');
let contenidoPlanillaAccesorios =''

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=accesorios-para-mascotas')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let contenido = '';
        for (let index = 0; index < 8; index++) {
            const element = data.results[index];
            contenido += `<li class="table-row">
            <div class="col col-1" data-label="Codigo">${element.id}</div>
            <div class="col col-2" data-label="Nombre del producto">${element.title}</div>
            <div class="col col-3" data-label="Precio">$${element.price}</div>
            <div class="col col-4" data-label="Stock">Disponible</div>
            <button class="carrito" id='${element.id}'>Añadir al carrito</button>
            </li>`;
        }
        planillaAccesorios.innerHTML += contenido;
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

