
const miNacimiento = new Date(1989, 8, 2)
const hoy = new Date()
const tiempo = hoy - miNacimiento

const proximoCumple = new Date(hoy.getFullYear(), miNacimiento.getMonth(), miNacimiento.getDate())
console.log(tiempo) // tiempo que transcurrio desde mi nacimiento.
console.log(proximoCumple);
// arreglo dias
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]
// imprimir mi dia de cumpleaños de este año
console.log( diasSemana[proximoCumple.getDay()]);
