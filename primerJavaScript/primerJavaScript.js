
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

//alert("Alerta en archivo externo JavaScript");

/*
    Varias lineas de comentarios
*/