// Question 5: Insert Element at Specific Position Description: Write a function that inserts a given element into a specific position in an array. Use the splice() method. Example: Input: • Array: [10, 20, 30, 40] • Element: 25 • Position: 2 Output: [10, 20, 25, 30, 40]

 let arr =  [10, 20, 30, 40];
let element =  25;
let position =  2;
arr.splice(position,0,element)
console.log(arr)