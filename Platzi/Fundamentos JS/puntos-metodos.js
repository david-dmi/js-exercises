// Calcular la distancia entre los puntos (0,4) (3,0)
const p1={
  x:0,
  y:4,
  moverEnX: function (x) { this.x += x },
  morverEnY: function (y) { this.y+=y }
}
const p2={
  x:3,
  y:0,
  moverEnX: function (x) { this.x += x },
  morverEnY: function (y) { this.y+=y }
}
function calcularDistancia (p1, p2) {
  const x= p1.x-p2.x
  const y= p1.y-p2.y
  return Math.sqrt(x*x + y*y)
}
console.log(   calcularDistancia(p1,{x:20, y:-7}).toFixed(2)  )
