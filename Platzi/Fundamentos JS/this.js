class Persona{
  constructor(nombre, amigos =[]){
    this.nombre = nombre
    this.amigos = amigos
  }
  listarAmigo(){
    // const _this = this
    this.amigos.forEach( (amigo) => {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }
}

const david = new Persona("David", ["vane", "juan", "Guti"])
