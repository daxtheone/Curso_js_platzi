
// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY

const API_URL =  'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id'
const opts = { crossdomain: true }

// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY MANEJANDO ORDEN CALLBACK HELL (forma 3 promesas)


function obtenerPersonajeOrden4(id) {

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

let ids = [1, 2, 3, 4, 5]

var promesas = ids.map( (id) => obtenerPersonajeOrden4(id) )
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


