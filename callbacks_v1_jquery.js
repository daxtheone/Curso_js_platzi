// COMO SE HARIA CON EL OBJETO xmlrEQUEST
function enviar (parametro) {
    var requerimientoXML = new XMLHttpRequest()
    console.log('estoy en enviar')
    console.log(parametro)
  
    // aqui se arma la funcion callback
    // mira simplemente que la respuesta llego y la muestra en la pagina
    requerimientoXML.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('respuesta').innerHTML = requerimientoXML.responseText
      }
    }
  
    // aqui se arma la funcion de llamado se arma URL y listo
    var urlXML = 'https://swapi.dev/api/people/' + parametro + '/'
    console.log(urlXML)
    requerimientoXML.open('GET', urlXML, true)
    requerimientoXML.send()
}


// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY

const API_URL =  'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id'
const opts = { crossdomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola! yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

//obtenerPersonaje(1);
//obtenerPersonaje(2);
//obtenerPersonaje(3);


// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY MANEJANDO ORDEN CALLBACK HELL (forma 1)

function obtenerPersonajeOrden(id, callback) {
    console.log(`Personaje Obtenido ${id}`);
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (persona) {
        console.log(`Hola! yo soy ${persona.name}`)
        if (callback) {
            callback()
        }
    })
}

obtenerPersonajeOrden(1, function () {
    obtenerPersonajeOrden(2, function () {
        obtenerPersonajeOrden(3, function () {
            obtenerPersonajeOrden(4)
        })
    });
});

// COMO LLAMAR AL Api ASINCRONICAMENTE CON JQUERY MANEJANDO ORDEN CALLBACK HELL (forma 2)

function obtenerPersonajeOrden2(id, callback) {
    console.log(`Personaje Obtenido ${id}`);
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(url, opts, callback)
        .fail( () => {
            console.log(`no se pudo obtener el personaje ${id}`)
        })
}

obtenerPersonajeOrden2(1, function (personaje) {
    console.log(`Hola! yo soy ${personaje.name}`)

    obtenerPersonajeOrden2(2, function (personaje) {
        console.log(`Hola! yo soy ${personaje.name}`)

        obtenerPersonajeOrden2(3, function (personaje) {
            console.log(`Hola! yo soy ${personaje.name}`)

            obtenerPersonajeOrden2(4, function (personaje) {
                console.log(`Hola! yo soy ${personaje.name}`)
    
            })

        })
    });
});
