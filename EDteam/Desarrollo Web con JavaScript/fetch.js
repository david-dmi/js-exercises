const url = "https://rickandmortyapi.com/api/character/1,2,3";

const loadCharacters = url => {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      draw(response)
    })
};

const draw = (data) => {
  alert(`Name: ${data[0].name} Specie ${data[0].species} Gender: ${data[0].gender} `)
}


loadCharacters(url);
