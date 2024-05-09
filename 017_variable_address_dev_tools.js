const name = 'Yash'
const age = 21
const isAdult = true



// Steps to see the address of the Variables
// 1. click on inspect and go to the sources tab
// 2. click on memory there and then check the box of numeric values
// 3. Click on take snapshot where you find the addresses for each and all the values of variable





// Note: if we compare two variables, then first from their address their value is fetched and then they are compared
// All the addresses in odd number





// So the execution stage is divided into 2 phases:
// 1. the address of value is stored in the variable
// 2. the value of the variable is fetched with the help of address
// 3. there are various groups for storing the address like string, number,   system - boolean values


// 4. as boolean values are just true or false, their various variables are not created, they just point to the same context - true/false
// 5. Same if the values are same. if two variables have a string name 'Yash' then they both will point to the same one context instead of creating two variables


// 6. 'Akash' and 'Aka' + 'sh' are different so will have two different variable addresses
// 7. But false and !!0 are same and this will have the same context and address
// 8. all the values that cannot be changed will have the same address on all the websites - null, true, undefined, etc.





// Note:
// The use of address is in Non-primitive data types







