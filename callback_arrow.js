
//see arrow function and normal function 

// const myfunc= function..Otherwise ye likho (a,b) =>ArrowFunction {
// }
// const myfunc= function (a,b) {
// }
// const myfunc1= (a,b) => {
// }
// advanced array methods use arrow function 
// arrow function must upper than where we use

const arr=[2,4,5,6,767,457,45,745,32];

const myfunc= (value,index) => {
    if(value==767){
        console.log("YES");
    }
};

arr.find(myfunc);

//Another way of writing 
/*
 arr.find( (a,b)=>{
    if(a>0){
        return a;
    }
 }  );

 here only 1 value will return for multiple we use filter
*/

// filter method is filter array of eelemnts on some condition

const myres= arr.filter((value,index)=>{
    if(value>4){
        return value;
    }
    
});
console.log(myres);

// every(val,idx) on all eleemnt reutrn true 
// some(val,idx) on any eelemtn works return true

// for of loop

for(let ele of arr){
    ele+=5;
    console.log(ele);
}
console.log(arr); // no change in array

// foreach()
let sum=0;
arr.forEach((val,idx)=>{
    sum+=val;
});
console.log(sum);
// foreach doesn't change origina array, no return here null will get

// map is use to change the get  arr val+x if i do

let red=arr.map((val,idx)=>{
    return val+20;
})
console.log(red);
console.log(arr);

// reduce function()
// start from 1st index;
// it take 3 arguements (prev,cur,idx)

let finalv=arr.reduce((prev,cur,idx)=>{
    console.log(prev,cur);
    return prev*cur; // pre=pre*cur;
});

console.log(finalv,2820275874000*32);



