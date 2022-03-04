function funcionPrincipal(funcionsecundaria){
    setTimeout(function(){
        console.log("soy el proceso principal")
        funcionsecundaria()
    },3000)    
}

funcionPrincipal(function(){
    console.log("soy la función secundaria")
})