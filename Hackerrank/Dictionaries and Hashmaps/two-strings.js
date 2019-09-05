/*
Given two strings, determine if they share a common substring.
A substring may be as small as one character.
For example, the words "a", "and", "art" share the common substring 'a'.
The words "be" and "cat" do not share a substring.
*/

function twoStrings(s1, s2) {
  let found = "NO";
  found =
    s1.split("").filter( (el, key) => s2.indexOf(el) > -1).length > 0
      ? "YES"
      : "NO";
  return found
}

let a = "hello";
let b = "world";
console.log(twoStrings(a, b));
