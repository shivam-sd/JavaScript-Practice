// wrong way  to store same type data

// let marks ={
//     rahul:88,
//     todhit:90,
//     amit:88,
//     pradeep:95,
// };
// console.log(marks);


// let marks=[88,66,90,88,78,99,87,66,77,98];
// console.log(marks);
// console.log(marks.length)
// console.log(marks[8]);
// console.log(typeof(marks));
// marks[6]=95;  
// console.log(marks)

// ............................printing a loop help of for loop................................ 

// let heroes = ["ironman", "batman", "spiderman", "coolman", "solidman", "goodman", "helperman"];
// for(let i=0; i<heroes.length; i++)
// {
//     console.log(heroes[i]); 
// }

// ..................................access for of loop...................................

// let heroes = ["ironman", "batman", "spiderman", "coolman", "solidman", "goodman", "helperman"];
// for(let hero of heroes)
// {
//     console.log(hero);
//     console.log(hero.toUpperCase());
// }


// ..................................lets practice queition......................................

// let studentMarks = [85,97,44,37,76,60];
// for(let marks of studentMarks)
// {
//     console.log("The Marks is here:",marks)
// }
// let sum = 85+97+44+37+76+60;
// console.log("The sum is of a studdent:",sum);
// let average = (sum)/studentMarks.length;
// console.log("The average of student:",average);

// let sum = 0;
// let studentMarks = [85,97,44,37,76,60];
// for(let marks of studentMarks)
// {
//    sum = sum + marks;
// }
// console.log("The sum is :",sum);
// let avg = (sum)/studentMarks.length;
// console.log("The average is:",avg);


// ....................given price to take 10% off and final price is taken and print.................
let per;
let offerValue;
let item = [250, 645, 300, 900, 50];
for(let i=0; i<item.length; i++)
{
    // ............printf item value............

    // console.log(item[i]);

    //.............find 10% original Value............... 

    per = (item[i])/10;
    // console.log(per)

    // .....................after find offer value - original value.........................

offerValue = (item[i]-per);
console.log(offerValue);
}
