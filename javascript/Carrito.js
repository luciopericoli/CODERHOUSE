window.onload = function() {
  //agregar productos al localstorage desde el boton de agregar producto//
  let botonAgregarProducto = document.getElementById('agregarProducto');
  botonAgregarProducto.onclick = function() {
    let producto = {
      id: document.getElementById('idProducto').value,
      nombre: document.getElementById('nombreProducto').value,
      precio: document.getElementById('precioProducto').value,
      stock: document.getElementById('stockProducto').value
    };
    let productos = localStorage.getItem('productos');
    if (productos === null) {
      productos = [];
    } else {
      productos = JSON.parse(productos);
    }

    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
  };
  console.log(localStorage.getItem('productos'));

    }


