/*
Minimum Swaps 2
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n]
without any duplicates. You are allowed to swap any two elements.
You need to find the minimum number of swaps required to sort the array in ascending order.
*/


// array.sort((a, b) => b - a); // 5 to 1
// array.sort((b, a) => b - a); // 1 to 5

function minimumSwaps(q) {
  const visited = q.slice(0).fill(false)
  let swaps = 0
  for (let i = 0; i < q.length; i++) {
      const start = i
      let cycleFound = false
      let current = i
      let cycleLength = 0
      if (visited[current] === false) {
          visited[i] = true
          while (!cycleFound) {
              visited[current] = true
              current = q[current] - 1
              if (current === start) {
                  cycleFound = true
              }
              cycleLength++
          }
          swaps += (cycleLength - 1)
          cycleLength = 0
      }
  }
  return swaps
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3
console.log(minimumSwaps([4, 3, 1, 2])); // 1
