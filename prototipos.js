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

var sacha = new Persona('daniel','rico',150);
sacha.saludar();
sacha.mialtura();