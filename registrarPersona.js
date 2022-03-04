// declaración de la función principal
function registrarPersona(personas,callback){
    setTimeout(function(){
        let solteros = personas.filter(function(persona){
            return(persona.estadoCivil == false)
        })
        callback(solteros)
    },3000)
}

// llamando la funcion principal
let personascesde = [
    {
        nombre: "jhony",
        salario: 2500000,
        estadoCivil: true
    },
    {
        nombre: "Cris",
        salario: 1500000,
        estadoCivil: false
    },
    {
        nombre: "laura",
        salario: 1000000,
        estadoCivil: false
    }
]
registrarPersona(personascesde,function(solteros){
    let suma = 0
    solteros.forEach(function(soltero){
        suma+=soltero.salario
    })
    console.log(`la suma de los salarios es ${suma}`)
})