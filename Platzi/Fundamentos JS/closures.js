function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia (nombre) {
  console.log(`Hola ${nombre} ${apellido}`);
  }
}
const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

// function saludarGomez(nombre) {
//   console.log(`Hola ${nombre} Gomez`);
// }
// function saludarPerez(nombre) {
//   console.log(`Hola ${nombre} Perez`);
// }


saludarGomez("Pedro");
saludarGomez("Juan");
saludarGomez("Laura");

saludarPerez("Pedro");
saludarPerez("Juan");
saludarPerez("Laura");


saludarRomero("Pedro");
saludarRomero("Juan");
saludarRomero("Laura");
