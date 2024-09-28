// Question 6: Replace Words in a String Description: Write a function that replaces all occurrences of a word in a string with another word. Use the replaceAll() method. Example: . Input: • String: "I love JavaScript. JavaScript is awesome!" • Word to replace: "JavaScript" • Replacement: "Python" Output "I love Python. Python is awesome!"

 let str =  "I love JavaScript. JavaScript is awesome!";
let  replace = "JavaScript";
let Replacement = "Python";
console.log(str.replaceAll(replace,Replacement))