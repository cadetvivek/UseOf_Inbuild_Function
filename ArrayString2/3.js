// Question 3: Remove Duplicate Values from an Array Description: Write a function that removes duplicate values from an array and returns a new array. Use the filter() and IndexOf() methods. Example: Input: [1, 2, 2, 3, 4, 4, 5] Output: [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 4, 4, 5] ;
let bag = []
let Usefilter = arr.filter((ele,index)=>{
  return arr.indexOf(ele)===index
})
console.log(Usefilter)