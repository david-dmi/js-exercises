// Hash Tables: Ransom Note
// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

function checkMagazine (magazine, note) {

  for(let i = 0; i < note.length; i++){
    // indexOf() returns the first index at which a given element can be found in the array,
    // or -1 if it is not present.
    let finder = magazine.indexOf(note[i])
    if (finder != -1) {
      magazine[finder] = ""
      if(i === note.length - 1){
        console.log("Yes")
        return 'Yes'
      }
    } else {
      console.log("No")
      return 'No'
    }
  }
}

let magazine = 'give me one grand today night'
let ransom = 'give one grand today'


console.log(checkMagazine(magazine, ransom))