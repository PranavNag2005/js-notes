// let range=10
// for(let i=0;i<=range;i++){
//     console.log("This is "+i + " time in the loop ")
// }


// const array=["apples","banana","orange","guava","avacado","grapes"]
// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }

// for(let i=array.length-1;i>=0;i--){
//     console.log(array[i])
// }




// const arrays=["apples","banana","orange","guava","avacado","grapes"]
// for(let item of arrays){
//     console.log("now",item)
// }

// const items={
//     name:"laptop",
//     brand:"lenovo",
//     price:90000
// }
// for(key in items){
//     console.log(items[key])
// }


const objects={
    pranav:98,praveen:99,riyaz:100,vamsi:98
}
const keys=Object.keys(objects)
for(let i=0;i<keys.length;i++){
    const key=keys[i]
    console.log(key,":",objects[key])
}


const persons={
    pranav:44,vamsi:12
}
for(let s in persons){
    console.log(s,":",persons[s]);
}

const array=[1,2,3,4,5]
let sum=0
for(let i=0;i<array.length;i++){
    sum+=array[i]
}
console.log("The mean of the array is ",sum/array.length)

