// Calcular la distancia entre los puntos (0,4) (3,0)
const p1={
  x:0,
  y:4
}
const p2={
  x:3,
  y:0
}
function calcularDistancia (p1, p2) {
  const x= p1.x-p2.x
  const y= p1.y-p2.y
  return Math.sqrt(x*x + y*y)
}
console.log( calcularDistancia(p1,{x:20, y:-7}))
