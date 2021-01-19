//brute force style
let arrayA = [1,2,2,1,4,4,5,6,7];

//create new array
let arrayB = [];

let len = arrayA.length;

for(let i = 0; i<len; i++){
    if(arrayB.indexOf(arrayA[i]) === -1){
        arrayB.push(arrayA[i]);
    }
}

console.log('arr B:' + arrayB);