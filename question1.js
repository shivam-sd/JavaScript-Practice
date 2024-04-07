let create = document.createElement("button");
create.innerText="Click me!";
create.style.backgroundColor="red";
create.style.color="white";
create.style.border="none";
create.style.marginLeft="500px";
create.style.marginTop="50px";
create.style.borderRadius="5px";


let button = document.querySelector("body");
button.before(create);
// button.style.backgroundColor="red";


let newClass = document.querySelector("p");

// newClass.setAttribute("class","text");
newClass.classList.add("text");