const starWars7 = 'Star Wars: El despertar de la fuerza'
const pgStarWars7 = 13
const nameDavid = 'David'
const ageDavid = 27

const namePeque = 'Vane'
const agePeque = 12

function canWatchStarWars7 (name, age, withAdult = false) {
  if(age >= pgStarWars7){
    alert(`${name} puede pasar a ver ${starWars7}  `);
  } else if( withAdult ){
    alert(`${name} puede pasar a ver ${starWars7}.
      Porque vine acompañada con adulto `);
  } else{
    alert(`${name} no puedes pasar a ver ${starWars7}. Tiene ${age} y necesitas tener minimo
      ${pgStarWars7}  ` )
  }
}
canWatchStarWars7(nameDavid,ageDavid)
canWatchStarWars7(namePeque,agePeque, true)
