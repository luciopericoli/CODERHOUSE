
let planillaProductos = document.getElementById('planilla')
let contenidoPlanilla =''

const productos = [
    { id: 42235,  nombre: "Vital Can Complete Adulto Raza mediana", precio: 4500 },
    {  id: 42442,  nombre: "Vital Can Balanced Adulto Raza pequeña", precio: 3.600 },
    {  id: 42257,  nombre: "Eukanuba Adulto Raza Grande"  , precio: 5200},
    {  id: 42311,  nombre: "Royal Canin Mini +7 años" , precio: 7100}];
    
 
 
for (let index = 0; index < productos.length; index++) {
    let planilla = productos[index]
    contenidoPlanilla += `<li class="table-row">
    <div class="col col-1" data-label="Codigo" id="idProducto">${planilla.id}</div>
    <div class="col col-2" data-label="Nombre del producto" id="nombreProducto">${planilla.nombre}</div>
    <div class="col col-3" data-label="Precio" id="precioProducto">$${planilla.precio}</div>
    <div class="col col-4" data-label="Stock" id="stockProducto">Disponible</div>
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
    .then(response => response.json())
    .then(data => {
        let contenido = '';
        for (let index = 0; index < data.results.length; index++) {
            let producto = data.results[index];
            contenido += `<li class="table-row">
            <div class="col col-1" data-label="Codigo" id="idProducto">${producto.id}</div>
            <div class="col col-2" data-label="Nombre del producto" id="nombreProducto">${producto.title}</div>
            <div class="col col-3" data-label="Precio" id="precioProducto">$${producto.price}</div>
            <div class="col col-4" data-label="Stock" id="stockProducto">Disponible</div>
            </li>`;
        }
        planillaProductos.innerHTML += contenido;
    }
    )
    

 