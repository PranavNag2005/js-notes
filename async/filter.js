const arr=[1,2,3,4,5,6,7,8,9,10]

const newarray=arr.filter(even=>{
    if(even%2==0){
        return even
    }
})
console.log(newarray)


const students=[
    {
        name:"pranav",
        grade:90
    },
    {
        name:"vamsi",grade:98
    },
    {
        name:"praveen",grade:91
    },
    {
        name:"abcd",grade:88
    }
]
const newstudent=students.filter(marks=>{
    if(marks.grade>=90){
        return marks
    }
})
console.log(newstudent)



// Basic Filtering: Given the array const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];, 
// use the filter() method to create a new
//  array that contains only the fruits that have more than 4 letters.

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

const new_fruit=fruits.filter(fruit=>{
    if(fruit.length>4){
        return fruit
    }
})
console.log(new_fruit)


// Filtering Numbers:
//  Given the array const numbers = [10, 15, 20, 25, 30, 35, 40];, use the filter() method 
//  to create a new array that contains only the numbers greater than 25.

const numbers = [10, 15, 20, 25, 30, 35, 40];
const new_number=numbers.filter(i=>{
    if(i>25){
        return i
    }
})
console.log(new_number)



const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 20 }
];

const new_user=users.filter(ages=>{
    if(ages.age>30){
        return ages.age
    }
})
console.log(new_user)

// Removing Duplicates: Given the array const numbers = [1, 2, 2, 3, 4, 4, 5];, 
// use the filter() method to create a new array that contains only unique numbers.


const numeral = [1, 2, 2, 3, 4, 4, 5];
const new_numeral=[...new Set(numeral)];
console.log(new_numeral)