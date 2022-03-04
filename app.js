function iniciar(){
    console.log("Iniciando el programa")
}

function procesar(){
    setTimeout(function(){
        console.log("Estoy procesando el programa")
    },3000)
}

function finalizar(){
    console.log("Estoy finalizando el programa")
}

iniciar()
procesar()
finalizar()