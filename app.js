const email = document.getElementById("email");
const password = document.getElementById("password");
const btnValidar = document.querySelector(".btn-enviar");
const aviso = document.querySelector(".texto-aviso");

const correoRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]))+$/;
const contraseñaRegex = /^.{1,5}$/;

//-------validacion----------//

btnValidar.addEventListener("click", e=>{
    e.preventDefault();
    let correo = email.value.trim();
    let contraseña = password.value.trim();
    console.log(contraseña)
    
    if(!correo){
       mostrarAviso("ingrse una direccion de correo valida");
    }
    else if(!contraseña){
        mostrarAviso("ingrese una contraseña valida");
    }
    else if (!correoRegex.test(correo)){
      mostrarAviso("ingrese un correo electronico valido");
    }
    else if (!contraseñaRegex.test(contraseña)){
      mostrarAviso("su contraseña debe tener al menos 5 caracteres");
    }
    else if (autenticarUsuario(correo, contraseña)){
      window.location = "bienvenido.html";
    }

});
function autenticarUsuario(correo, contraseña){
  return correo === "francofloresfff09@gmail" && contraseña === "12345";
}
function mostrarAviso(mensaje){
    aviso.style.color = "#ff2020";
    aviso.style.fontWeight = "900";
    aviso.textContent = mensaje;
    aviso.style.visibility = "inherit";
    }