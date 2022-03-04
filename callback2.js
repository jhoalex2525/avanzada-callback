// declaración función principal
function calcularSuma(numero1,numero2,callback){
    setTimeout(function(){
        let suma = numero1+numero2
        callback(suma)        
    },5000)
}

// llamar a la función principal
calcularSuma(5,1,function(suma){
    console.log("La suma es: "+suma)
})