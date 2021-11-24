window.onload = function() {
    let BuscarCarrito = localStorage.getItem("Carrito");
    let idProducto = queryStringObj.get("id");

if (BuscarCarrito == null || BuscarCarrito == "[]") {
    //Creo una lista vacía
    Carrito = [];
  } else {
    //Recupero el array de localStorage
    Carrito = JSON.parse(BuscarCarrito);
  }
  let agregar = document.getElementsByClassName(".carrito");
  agregar.addEventListener("click", function (e) {
    //Detener el comportamiento default de <a></a>
    e.preventDefault();

    if (Carrito.includes(idTrack)) {
      //Si el track está tenemos que quitarlo.
      let indiceEnElArray = Carrito.indexOf(idTrack);
      Carrito.splice(indiceEnElArray, 1);
      document.getElementsByClassName(".carrito").innerHTML =
      `<button class="carrito" id='${element.id}'>Añadir al carrito</button>
      </li>`;

      console.log(Carrito);
    } else {
      //Agrego el producto al carrito
        Carrito.push(idTrack);
        document.getElementsByClassName(".carrito").innerHTML =
        `<button class="carrito" id='${element.id}'>Quitar del carrito</button>
        </li>`;

    }

    //guardar lista en localStorage
    let CarritoParaStorage = JSON.stringify(Carrito);
    localStorage.setItem("Carrito", CarritoParaStorage);
    console.log(localStorage);
  });
}
