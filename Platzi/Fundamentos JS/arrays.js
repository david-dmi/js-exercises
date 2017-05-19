function suma (...numeros) {
  return numeros.reduce( function (acum, numero) {
    acum+=numero
    return acum
  }, 0)
}
suma(4,8,12,8954,7,9)

const dobles= (...numeros) => numeros.map(numero =>numero*2)
const pares= (...numeros) => numeros.filter(numero =>numero % 2 == 0)


  // const resultado = []
  // for(let i=0; i<numeros.length; i++){
  //   resultado.push(numeros[i]*2)
  // }
  // return resultado
  // return numeros.reduce( function (acum, numero) {
  //   acum+=numero
  // })
