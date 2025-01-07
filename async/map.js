//map iterating over an array

const numbers=[1,2,3,4,5,6,7,8,9,10]

const double=numbers.map(item=>item*2)
// console.log(double)



const fruits=["apple","banana","mango","guava"]

newarray=fruits.map(item=>item.length)
// console.log(newarray)

const number=[1,2,3,4,5,6,7,8,9,10]
tripled=number.map(i=>i*i*i)
console.log(tripled)



const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
ser=users.map(n=>n.name)
console.log(ser)

const digits = [1, 2, 3, 4, 5]
const digit=digits.map(i=>{
    if (i%2==0){
        return i**2
    }
    else{
        return i
    }
})
console.log(digit)