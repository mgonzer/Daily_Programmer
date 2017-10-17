// # Anagram
//
// Write a program to test if a word is an anagram of another word.
//
// ## Input
//
// Two strings e.g. "pameesxl" and "examples".
//
// ## Output
//
// Boolean. True if the words are anagrams.

function anagram(word1, word2){
  let sort1 = word1.split('').sort().join('')
  let sort2 = word2.split('').sort().join('')
  return sort1 == sort2
}

console.log(anagram("hello", "hello"))
