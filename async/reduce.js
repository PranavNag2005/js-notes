//based on the previous value the current value was decreased 

const numbers=[1,2,3,4,5]
const answer=numbers.reduce((acc,i)=>{
    return acc+i
})
console.log(answer)




// Problem 2: Product of an Array
// Given an array of numbers, use the reduce() method to calculate 
// the product of all the numbers in the array.




const number = [1, 2, 3, 4, 5];
const result=number.reduce((acc,i)=>{
    return acc*i
})
console.log(result)
