// Js code executes in two phases

// 1. Memory creation phase
// -- memory for variable is created in ram 4and undefined value is assigned to it
// -- it will not read other lines like console/addition/etc, it is just finding let,var, const and reserving their memory
// -- it is in the temporal deadzone - period where let and const declarations cannot be used

// 2. Code execution phase
// -- now the type and value of the variable is assigned in the memory




// Note:
console.log(typeof(typeof(4+3))) // type of this will be a string




// Note: in sources tab of inspect, if we add a debugger then the js code stops executing - debugger or breakpoint
debugger
console.log("Hello this is yash chavan")

// Recap: defer keyword - until entire html is passed, it will send the request to js but will not execute it
// why to not keep script tag at the bottom ?
// Ans: if there is a network issue then the request for js will be sent late, so to avoid this use defer

// Note:
// var variables will go in the scope tab under sources
// let variables will go in the script tab under sources



