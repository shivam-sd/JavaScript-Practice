// ..............................use push() method.....................................

// let itemfood = ["Mango","patato","banana","paneer"];
// itemfood.push("chips");
// console.log(itemfood);    




// ................................use pop() method...................................

// let itemfood = ["Mango","patato","banana","paneer"];
// let delet_item = itemfood.pop();
// console.log(itemfood);
// console.log(delet_item);




// ...............................use toSreing() method....................................
// let itemfood = ["Mango","patato","banana","paneer"];
// let marks = [80,77,55,90,89];
// let numberTostr = marks.toString();
// console.log(numberTostr);
// let arrTostr = itemfood.toString();
// console.log(arrTostr);




// ...................................use concat() method.......................................


// let itemfood = ["Mango","patato","banana","paneer"];
// let marks = [80,77,55,90,89];
// let superheroes = ["ironman", "badman", "goodman", "spiderman"];

// let addToarr = itemfood.concat(marks);
// console.log(addToarr)

// let addThreearr = itemfood.concat(marks,superheroes);
// console.log(addThreearr);




// .........................use unshift() method.............................

// let fruits = ["mango", "apple", "banana", "orange"];
// fruits.unshift("litchi");
// console.log(fruits);




// .............................use shift() method...................................

// let fruits = ["mango", "apple", "banana", "orange"];
// fruits.shift();
// let delet_value = fruits.shift();
// console.log(fruits);
// console.log(delet_value);




// .............................use slice() method.........................................

// let fruits = ["mango", "apple", "banana", "orange","papaya","litchi"];
// let slice = fruits.slice(1,5);
// console.log(slice);



// ...............................use splice() method...................................

// let fruits = ["mango", "apple", "banana", "orange","papaya","grapes","litchi"];

// // add element
// fruits.splice(2,2,101,102);
// console.log(fruits);

// // delet element
// fruits.splice(2,1);
// console.log(fruits);

// // replace element 
// fruits.splice(2,0,101);
// console.log(fruits);






// ...............................practice question...................................

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies)
// delete first company
companies.shift();
console.log(companies);

// remove uber & add ola at place
companies.splice(1,1,"OLA");
console.log(companies);

// add amazone at the end
companies.push("Amazone");
console.log(companies);






