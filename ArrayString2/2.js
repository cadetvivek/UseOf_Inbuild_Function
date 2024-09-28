// Question 2: Find Longest Word in a String Description: Write a function that finds the longest word in a given string. Use the split() and reduce() methods. Example: Input: "The quick brown fox jumped over the lazy dog" Output "Jumped"


let str = "The quick brown fox jumped over the lazy dog"
let arr = str.split(' ')

let bag = arr.reduce((acc,curr)=>curr.length>acc.length?curr:acc,'')
console.log(bag)