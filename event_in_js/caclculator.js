let input = document.getElementById("inputtext");
let result = document.getElementById("click");
let show = document.getElementById("show");
result.addEventListener("click",() => {
    let res = input.value;
    let review = eval(res);
    show.innerHTML = review;

    console.log(review);

});