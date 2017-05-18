const nombre = 'David'
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
]
function correr() {
  const min = 5
  const max = 15
  return Math.round (Math.random()* (max-min)) + min
}
let totalKms = 0;
const largo = dias.length
for (let i = 0; i < largo; i++) {
  const kms = correr()
  totalKms += kms
  console.log(`El dia ${dias[i]} ${nombre} corrio ${kms}kms`)
}
const promedioKms = totalKms/dias.length
console.log(`en promedio ${nombre} corrio  ${promedioKms.toFixed(2)} kms` );
