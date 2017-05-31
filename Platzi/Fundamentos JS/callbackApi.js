function get(URL, callback) {
  const xhr= new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    const DONE = 4
    const OK = 200
    if(this.readyState === DONE){
      if(this.status === OK){
        // ok
        callback( null, JSON.parse(this.responseText))
      }else{
        // hubo un error
        callback(new Error (`Se produjo un error con el request: ${this.status}`) )
      }
    }
  }
  xhr.open('GET', URL)
  xhr.send(null)
}

function handleError(error){
  console.log(`Request fallida: ${error}`)
}

get('https://www.swapi.co/api/people/1/', function onResponse(error, luke){
  if(error) return handleError(error)

  get(luke.homeworld, function onHomeWorldResponse(error, homeworld){
    if(error) return handleError(error)
    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld}`)
  })

  console.log(`Request succeded`);
  console.log(`luke`, luke);
})
