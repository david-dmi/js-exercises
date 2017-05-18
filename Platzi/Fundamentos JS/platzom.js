function platzom(str) {
  let translation = str



  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  
  // Si la palabra termina en 'AR', se quita esas dos letras
  if(str.toLowerCase().endsWith ('ar')){
    translation= str.slice(0, -2) // cortar dos caracteres desde el final
  }
  // Si la palabra inicia con Z, se le añade "pe" al final
    if(str.toLowerCase().startsWith ('z')){
      translation+='pe'
    }
  // si la palabra traducida tien 10 o mas letras,
  // se debe partir a la mitad y unir con un guión del medio
  if(translation.length>=10){
    const firstHalf = translation.slice(0, Math.round(translation.length)/2)
    const secodnHalf = translation.slice(Math.round(translation.length)/2)
    translation= `${firstHalf}-${secodnHalf}`
  }

  // si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayusculas y minusculas

  const reverse = (str) => str.split('').reverse().join('')



  if(str == reverse(str) ){
    return minMay(str)
  }



  return translation
}

console.log(platzom("Programar"))   // Program
console.log(platzom("Zorro"))       // Zorrope
console.log(platzom("Zarpar"))     // Zarppe
console.log(platzom("abecedario"))   // abece-dario
console.log(platzom("sometemos"))   // SoMeTeMoS
