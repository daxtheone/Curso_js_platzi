function heredaDe(prototipoHijo, prototipoPadre) {
    let fn  = function () {}
    fn.prototype= prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre =  nombre;
    this.apellido = apellido;    
    this.altura =  altura;
}

//no se puede llevar a arrow funcion por que cambia el contexto this

Persona.prototype.saludar = function () { console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`) }

Persona.prototype.mialtura = function ()  {
    let mensaje = (this.altura>169) ? 'Soy alto': 'Soy bajo';
    console.log(`y Soy ${mensaje}`);
}


function Desarrollador(nombre, apellido, altura) {
    this.nombre =  nombre;
    this.apellido =  apellido;
    this.altura =  altura;
}
heredaDe(Desarrollador, Persona)
Desarrollador.prototype.saludar = function () {
    console.log(` Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
}



var sacha = new Persona('daniel','rico',150);
sacha.saludar();
sacha.mialtura();

var arturo = new Desarrollador('arturo','rico',190);
arturo.saludar();
arturo.mialtura();