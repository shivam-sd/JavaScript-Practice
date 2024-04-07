let tagAccess = document.querySelector("h2");
console.log(tagAccess);
// console.log(tagAccess.innerText);
tagAccess.innerText = tagAccess.innerText + "! From Apna Collage Student";
console.log(tagAccess.innerText);

let div = document.querySelector(".box");
console.log(div.innerText = "Hello Guys");

let div1 = document.querySelector(".box1");
console.log(div1.innerText = "I am Coder");

let div2 = document.querySelector(".box2");
console.log(div2.innerText = "I am Developer");

let create = document.createElement("button");
create.innerText="Here"
create.style.width="100px";
create.style.height="30px";
create.style.textAlign="center";

console.log(create);

let insert = document.querySelector("h2");
insert.before(create);
console.log(insert);
// ..........................simple method to add text in all divs...................... 

// let divs = document.querySelector(".box3");
// console.log(divs.innerText[0] = "Hello");
// console.log(divs.innerText[1] = "Hello");
// console.log(divs.innerText[2] = "Hello");


// ......................second method access div...........................................

// let divs = document.querySelectorAll(".box3");
// let indx=1;
// for(const div of divs){
//     div.innerText = `I am developer ${indx}`;
//     indx++;
// }


  
// let password = prompt("Set your paaword to your device:");
// console.log("Your PassWord is = ",password)
// console.log("Your password lenght is = ",password.length);

// let check_password = prompt("Enter Your password to unlock your device:");
// while(check_password !== password)
// {
//   console.log("Wrong Password :-");
//   pssword = prompt("Pleace enter your correct password:");
// }
// console.log("Seccess | Your password is Seccess:-");
// console.log("Unlocked Ypur Device:-");



// let fullName = prompt("Enter Your Full Name :-");
// let spacial = "@";
// for(const char of fullName)
// {
//   let userName = spacial+fullName+fullName.length;
//   console.log(userName);
// }

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

// const student  = {
//   FirstName : "Shivam",
//   LastName : "Maurya",
//   Education : "CS Degree",
//   Class : "OBC",
//   is_bilineor : "yes"
// };

// for(const obj in student)
// {
//     let access = `The key is = ${obbj} The Value is = ${student[key]}`;
//     console.log(access);
// }


// let modebtn = document.querySelector(".btn");
// let dody = document.querySelector("body");
// let color = "light";
// modebtn.addEventListener("click",() => {
//     if(color === "light"){
//         color = "dark";
//     }
//     else{
//         color = "light";
//     }
//     console.log(color);
// });