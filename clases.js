
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre =  nombre;
        this.apellido = apellido;    
        this.altura =  altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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
    saludar() {
        console.log(` Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
    }
}



var sacha = new Persona('daniel','rico',150);
sacha.saludar();
sacha.mialtura();

var arturo = new Desarrollador('arturo','rico',190);
arturo.saludar();
arturo.mialtura();