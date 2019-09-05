/*
Given a 6x6 2D Array,
We define an hourglass in 'A' to be a subset of values with indices
falling in this pattern in [arr] graphical representation:

a b c
  d
e f g

Write a function or functions that returns the largest summed number
of all the hourglass patterns found in [arr]

It should return an integer, the maximum hourglass sum in the array.
hourglassSum has the following parameter(s):
[arr] : an array of integers
*/

function hourglassSum(arr) {
  let hourglasses = [] // array to fill with the shape

  // evaluate the arr type, content and size
  if (typeof arr === "object"
      && arr.length === 6
      && arr.map(i => i.length).reduce((p, n) => p + n) === 36) {
        for (let row = 0; row <= 3; row++) {
          for (let col = 0; col <= 3; col++) {
            let sum = 0;
            // shape to search in array
            /*
            a b c
              d
            e f g
            */

            sum += arr[row][col]; //a
            sum += arr[row][col + 1]; //b
            sum += arr[row][col + 2]; //c
            sum += arr[row + 1][col + 1]; //d
            sum += arr[row + 2][col]; //e
            sum += arr[row + 2][col + 1]; //f
            sum += arr[row + 2][col + 2]; //g

            hourglasses.push(sum);
          }
        }
  }

  return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}
