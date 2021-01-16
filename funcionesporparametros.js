
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre =  nombre;
        this.apellido = apellido;    
        this.altura =  altura;
    }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }
    mialtura() {
        let mensaje = (this.altura>169) ? 'Soy alto': 'Soy bajo';
        console.log(`y Soy ${mensaje}`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(` Hola me llamo ${nombre} ${apellido} y soy desarrollador `)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`OHH y eres desarrollador`);
    }
}


var sacha = new Persona('daniel','rico',150);
sacha.saludar(responderSaludo);
sacha.mialtura();

var arturo = new Desarrollador('arturo','rico',190);
arturo.saludar(responderSaludo);
arturo.mialtura();