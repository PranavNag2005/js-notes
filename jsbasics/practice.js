var s="10";
console.log(s)
console.log(typeof(s))  //typeof() used to know of type of string it returns string for s
let a=90;
console.log(a);
console.log(typeof(a)); //type of returns number

const pi=3.14;
console.log(pi);
console.log(typeof(pi)) //it also returns number 


const student={
    "name":"pranav",
    "phone":7013657123,
    "marks":88
}
console.log(student)
console.log(student.name)
console.log(student.phone)
console.log(student.marks)

let arr=[1,2,3,"hello"]
console.log(arr)


let x=1;
let y=2;
let z="pranav"
let answer=x+y+z  //output: 3pranav as 1 and 2 in the start so they have added and string is added to it 
console.log(typeof(answer))
let result=z+y+x
console.log(result)  //starting was string it was added to pranav+2=pranav2 and pranav2+z=pranav21


const person={
    "name":"pranav",
    sports:'cricket'
}
// person={"age":45}//this gives an error
person.age=45  //likes this we can add key: value pairs to object in js
person.salary=988888
person.job="Teacher"
console.log(person)