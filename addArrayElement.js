function addData(n, arr){
//    var array1 = [1,2,3,4,10];
   var reducer = (accumulator, currentValue) => accumulator + currentValue;
//    console.log('arrrr:', reducer);
   console.log('Array Sum: -> ', arr.reduce(reducer));
}

addData(6, 7)