function recibirNumeros(num1,num2,num3,num4,num5,callback){    
    setTimeout(function(){
        let datos = Array(
            num1,
            num2,
            num3,
            num4,
            num5
        )
        callback(datos)
    },5000)
}

recibirNumeros(1,3,6,8,9,function(datos){
    let suma = 0
    datos.forEach(function(dato){
        suma = suma + dato
    })
    console.log("la suma es: "+suma)
})