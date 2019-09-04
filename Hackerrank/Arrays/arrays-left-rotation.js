/*
Arrays: Rotation

Given an array 'data' of 'n' integers and a number, 'rotations', perform 'rotations' left rotations on the array. 
Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft. It should return the resulting array of integers.

rotLeft has the following parameter(s):

- An array of integers .
- An integer , the number of rotations.

*/

let data = [1, 2, 3, 4, 5];
let rotations = 2

function rotLeft(arr, r ) {
  let temp = arr.splice(0)
  for (let i=0; i<r; i++) {
    let first = temp.shift() // remove first item of array
    temp.push(first)  // add it to the end
    // console.log(first)
  }
  console.log(temp)
  return temp;
}

function rotRight(arr, r ) {
  let temp = arr.splice(0)
  for (let i=0; i<r; i++) {
    let last= temp.pop()  // remove last item of array
    temp.unshift(last)    // add it to the beginning of the array
  }
  console.log(temp)
  return temp;
}


rotLeft(data, rotations)
// rotRight(data, rotations)