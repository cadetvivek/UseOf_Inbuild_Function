// Question 1: Reverse an Array Description: Write a function that takes an array and returns a new array with the elements in reverse order using the reverse() method. Example: . Input: [1, 2, 3, 4] Output: [4, 3, 2, 1] Enter your answer here .

let arr =  [1, 2, 3, 4];
let bag = []
for(let i=arr.length-1;i>=0;i--){
  bag.push(arr[i])
}
console.log(bag)