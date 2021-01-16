
// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY

const API_URL =  'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id'
const opts = { crossdomain: true }

// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY MANEJANDO ORDEN CALLBACK HELL (forma 3 promesas)


function obtenerPersonajeOrden3(id) {

    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail( () => reject(id) )

    } )
    
}
function onError(id){
    console.log(`ocurrio un error al obenter el personaje ${id}`)

}

obtenerPersonajeOrden3(1)
    .then( personaje1 => {
        console.log(`Hola! yo soy el personaje 1 = ${personaje1.name}`) 
        return obtenerPersonajeOrden3(2)
    })
    .then( personaje2 => {
        console.log(`Hola! yo soy el personaje 2 = ${personaje2.name}`) 
        return obtenerPersonajeOrden3(3)
    })
    .then( personaje3 => {
        console.log(`Hola! yo soy el personaje 3 = ${personaje3.name}`) 
        return obtenerPersonajeOrden3(4)
    })
    .then( personaje4 => {
        console.log(`Hola! yo soy el personaje 4 = ${personaje4.name}`) 
    })
    .catch(onError)

