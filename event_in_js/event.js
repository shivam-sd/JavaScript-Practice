let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Hii");
    a = 25;
    a++;
    console.log(a);
};

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("Hello");
};

let hover = document.querySelector(".hover");
hover.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
};

//............................................... Event Listener... .................................................

let over = document.querySelector(".over");
over.addEventListener("mouseover",() => {
    console.log("hii");
});

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    console.log("hello");
    alert("I Am Alert");
});


