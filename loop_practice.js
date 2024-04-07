// let i;
// for(i=0; i<=100; i++)
// {
//     if (i%2===0){
//         console.log(i)
//     }
// }

n
// ........................number gussing game............................ 

let game_number=25;
let n = prompt("Guess the number:");
    while(n != game_number){
        console.log("Sorry Wrong guess");
        n = prompt("Pleace correct guess:");
    }
        console.log("Success:");
        console.log("You are correct guess:");