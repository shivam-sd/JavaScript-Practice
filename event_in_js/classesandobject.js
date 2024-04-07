let student = {
    fullName : "Shivam Maurya",
    marks : 95,
    printMarks : function () {
        console.log("Student marks is :",this.marks);
    },
}
console.log(student.printMarks);

let employee = {
    calTax () {
        console.log("Tax Rate Is 10%");
    }
};

let KaranArjun = {  
    salary : 50000
};

KaranArjun.__proto__ = employee;


class toyotaCar {
    start() {
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    employees() {
        fullName = "shivam";
    }
};