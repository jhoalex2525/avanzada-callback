function funcionPrincipal(funcionsecundaria){
    setTimeout(function(){
        console.log("soy el proceso principal")
        funcionsecundaria()
    },3000)    
}

funcionPrincipal(function(){
    console.log("soy la función secundaria")
})

// callback es una funcion segundaria y es parametro de una funcion principal y se ejecuta solo si la funcion principal se ha ejecutado previamente