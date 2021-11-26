//guardar el usuario en el localstorage//

let usuario = {
    email: "",
    contraseña: "",
   }

    let guardar = document.getElementById("guardar")
    guardar.onclick = () => {
        usuario.email = document.getElementById("email").value
        usuario.contraseña = document.getElementById("contraseña").value
        localStorage.setItem("usuario", JSON.stringify(usuario))
    }
    let cargar = document.getElementById("cargar")
    
    console.log(localStorage.getItem("usuario"));

  

  
    






