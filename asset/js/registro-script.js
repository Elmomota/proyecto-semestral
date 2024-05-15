let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let error1 = document.getElementById("error1");

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    error1.innerHTML = "";

    let nombreV = nombre.value;
    let apellidoV = apellido.value;
    
    if(nombreV === ""){
        error1.innerHTML = "Debe ingresar el nombre";
        error1.style.color = "red";
        return;
    }

    console.log(`Nombre: ${nombreV}, Apellido: ${apellidoV}`);

    nombre.value = "";
    apellido.value = "";
    console.log('Registro exitoso');
});
