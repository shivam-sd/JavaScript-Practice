// const URL = "https://cat-fact.herokuapp.com/facts";

// let getFacts = async () =>{
// console.log("getting data....");
// let response = await (URL);
// console.log(response);
// let data = await response.json();
// console.log(data);

// };

// getFacts();

// const promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("Hello Success");
//     },1000);

//     reject("err");

// });

// let Mypromises = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("The Oparation is successfully resolve");
//     },2000);
// });

// Mypromises.then((result) => {
//     console.log(result);
// });
// Mypromises.catch((error) => {
//     console.log(error);
// });

// let myPromis = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"shivam" , password: "123"});
//         }
//         else{
//             reject("ERROR!somthing went wrong");
//         }
//     },1000)
// });


// async function consumePromiseFive(){
//     try{
//     let response = await consumePromiseFive
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();

// let promise = new Promise(function (resolve , reject){
//     resolve("The code SuccessFully Resolve");
//     reject("The Code is Throught Error");
// });
// promise.then((result) => {
//     console.log(result);
// })

function myDisplayer(some){
let p = document.getElementById("#para").innerHTML = some;
}

let Promises = new Promise(function(resolve, reject){
    let x = 0;
    if(x == 0){
        resolve("OK ! Done");
    }
    else{
        reject("Error");
    }
});

// Promises.then(function (value){
//     console.log(value);
// })
// Promises.(function (error) {
//     console.log(error);
// })
Promises.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  Promises.then(
    function(value){
        myDisplayer(value)
    },
    function(error){
     myDisplayer(error);
    }
  )
  