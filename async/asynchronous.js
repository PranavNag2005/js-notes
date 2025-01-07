console.log("watching Ind Vs Pak ")
setTimeout(()=>{
    console.log("India won the match ")
},5000)
console.log("The target was 175 for India ")

let count=0
let countvalid=setInterval(()=>{
    console.log("count: ",count)
    count+=1
    if(count==5){
        clearInterval(countvalid);
        console.log("Interval cleared ")
    }
},1000)


function greet(name,callback){
    console.log("Hello "+name+" !")
    callback()
}
function goodbye(){
console.log("bye!!!")
}
greet("pranav",goodbye)


function hello(callback){
    console.log("hello");
    callback();
}
function wait(){
    console.log("Wait for sometime ")
}
hello(wait)  //first hello function will be executed afterwards wait function  
function goodbyes(){
    console.log("goodbye my friend")
}
hello(goodbyes)



function sum(callback,x,y){
    let result=x+y
    callback(result);
}
function displayresult(result){
    console.log(result);
}
sum(displayresult,1,2)