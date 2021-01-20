
/**
 * Language : English
 *
 *
 * Hoisting
 *
 * Hoising is basically a process when a JS script is executed, then JS engine(like V8) create a global execution context or an execution 
 * context, in the process of execution context creation, there are two - phase, one is the memory creation phase and the second one is 
 * code execution(Thread of execution)
 * 
 * Basically when JS engine, in the memory creation phase, it allocates memory for all variables and function. For function, it assigns the 
 * same code block and for a variable, it assigns undefined.
 * 
 * This is all about Hoisting in JS.
 *
 *
 * What are the differences between let, const and var?
 *
 * let is blocked scope, it is block scoped. let variable declaration can be redeclared into the same scope. let variable goes into a 
 * temporal dead zone. This means it is not accessible before initialization.
 *
 * const is used to declare a variable as constant, which means the const variable can not be redeclared and reinitialized. It also behaves 
 * in the context of hoisting as let.
 *
 * var is used to declare the variable into the global scope, the var variable can be accessed before initialization and will give the 
 * undefined value. it does not go into a temporal dead zone.
 *
 * var is better to use when we need a variable into the global scope. BUT, with var there are some problems like it can be redeclared and 
 * reinitialized.
 *
 * let is used when we need a variable in block scope. This can be reinitialized but can not be redeclared.
 *
 * const is used when, We are sure, that the value of the variable will not change during the script execution.
 *
 */


//  Example code for var

var studentName = "Mohammad Imran";
console.log(studentName);
function callStudent() {
    var studentName = "Elon Musk";
    console.log(studentName);
}
callStudent();
studentName = "Sachin Tendulkar";
console.log(studentName);

// Example code for const

const schoolID = "GUR458125IN";
console.log(schoolID);
function getSchool() {
    const schoolID = "NOI458455IN";
    console.log(schoolID);
}
getSchool();
console.log(schoolID);


// Example code for let

let schoolName = "Mellinum Internationl School";
console.log(schoolName);
function getSchoolName() {
    let schoolName = "Greenwood School";
    console.log(schoolName);
}
getSchoolName();
schoolName = "MS International School";
console.log(schoolName);


