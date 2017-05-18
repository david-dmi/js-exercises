function Punto(x, y) {
  this.x = x
  this.y = y
}
Punto.prototype.moverEnX= function moverEnX(x){
  this.x+=x
}
Punto.prototype.moverEnY= function moverEnY(y){
  this.y+=y
}
Punto.prototype.calcularDistancia= function calcularDistancia(p) {
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x*x + y*y)
}
const p1= new Punto(0,4)
const p2= new Punto(3,0)

p1.moverEnX(10)
p2.moverEnY(-4)
console.log( p1.calcularDistancia(p2) )
console.log( p2.calcularDistancia(p1) )
