const names = [1,2,3,4,5]

console.log(1*2*3*4*5*100)

const output = names.reduce((num1, num2)=>{
    return num1 * num2
}, 100)

console.log(output)


