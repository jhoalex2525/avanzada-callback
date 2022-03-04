function entradaDatos(nombre,edad,password,callback){
    let datos = {
        nombre: nombre,
        edad: edad,
        password: password
    }
    setTimeout(function(){
        callback(datos)
    },3000)
}

entradaDatos('jhony',32,'micontra123',function(datos){
    if(datos.edad >= 18 ){
        console.log('Bienvenido '+datos.nombre)
    }
    else{
        console.log(datos.nombre+' eres menor de edad, no se te admite')
    }    
})