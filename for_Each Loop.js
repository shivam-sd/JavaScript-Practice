// create a for each loop

// only print array element 

// let arr=[1,2,3,4,5,6];

// arr.forEach(function printArry(val){
//     console.log(val);
// });

// array print in srting using forEach loop

// let arr=["delhi","bombay","noida","ghaziabaad","bariely","pune","bangloru","hariyana"];

// arr.forEach(function traverse(val){
// console.log(val);
// });

// using arrow function

// arr.forEach((val) =>{
//     console.log(val);
// });

// arr.forEach((val,index,arr) =>{
//     console.log(val.toUpperCase(),index,arr);
// });


// practise question

// given a array and print numbers a square of numbers

// let num=[1,2,3,4,5];
// num.forEach((square) => {
// console.log(square**2);
// });


// ...............................use some function in Array={}...........................

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr1= arr.filter((val) => {
//     return val % 2=== 0
// })
// console.log(arr1);


// print element greater than 4 number using filter method

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr1= arr.filter((val) => {
//     return val > 4
// })
// console.log(arr1);


// ....................................Redues function...................................

// let arr=[1,2,3,4,5];

// const output = arr.reduce((prev,curr) => {
//     return prev + curr;
// });
// console.log(output);

// let  arr = [2,3,4,5,6,7];
// const output = arr.reduce((prev,curr) => {
//     return prev < curr ? prev : curr;
// });
// console.log(output);


//.............................. lets second practice question.............................

// let marks = [77,89,90,55,98,99,95,85,66,80,86,66];

// let number = marks.filter((val) =>{
//     return val > 90;
// });
// console.log(number);


//................................. take a input from user and create a nwe array...............

n = prompt("Enter number :");
let a = [];

for(let i=1; i<=n; i++)
{
   a[i-1]=i;
}
console.log(a);

let sum = a.reduce((prev,curr) => {
    return prev + curr;
});
console.log(sum);

let product  = a.reduce((prev,curr) => {
    return prev * curr;
});
console.log(product);


