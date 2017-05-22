const david = {
  nombre: 'David',
  apellido: 'Portilla S'
}
function saludar (veces, uppercase){
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str);
  }
}

// saludar.call(david, 3)
saludar.apply(david, [3, true])
