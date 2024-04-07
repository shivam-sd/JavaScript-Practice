// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let mode = "light";
// modebtn.addEventListener("click",() => {
//     if(mode === "light"){
//         mode = "Dark";
//         body.classList.add("Dark");
//         body.classList.remove("light");
//     }
//     else{
//        mode = "light";
//        body.classList.add("light");
//        body.classList.remove("Dark");
//     }
// console.log(mode);
// });


let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modebtn.addEventListener("click",() => {
    if(mode === "light"){
        mode = "Dark";
    body.classList.add("Dark");
    body.classList.remove("light");
}
else{
    mode = "light";
    body.classList.add("light");
    body.classList.remove("Dark");
    }
    console.log(mode);
});


let hover = document.querySelector(".hover");
let mainpage = document.querySelector("body");
let color = "light";
hover.addEventListener("mouseover",() => {
    if(color === "light"){
        color = "dark";
        body.classList.add("dark-color");
        body.classList.remove("light-color");
    }
    else{
        color = "light";
        body.classList.add("light-color");
        body.classList.remove("dark-color");
    }
    console.log(color);
});