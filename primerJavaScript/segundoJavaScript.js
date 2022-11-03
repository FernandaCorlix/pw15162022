
function funcionAlerta(){
    alert("di clic");
}

function quitarSITEC(){
   /* let pregunta = confirm("Seguro que quieres quitar SITEC?") */
    if(confirm("Seguro que quieres quitar SITEC?")){
        alert("SITEC eliminado");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Chiiale";
    }else{
        alert("No se elimino")
    }
}

async function traerpersona(){
    /*constantes se declaran con const */
    const respuesta = await fetch("https://randomuser.me/api/");
    console.log(respuesta.status);
    const datos = await respuesta.json();
    console.log(datos);
    console.log(datos.results[0].name.last);
}

//alert("Alerta en archivo externo JavaScript");

/*
    Varias lineas de comentarios
*/