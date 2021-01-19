function DiagonDiff(arr){
   //length of input array 
var n = arr.length;
var rightSum = 0;
var leftSum = 0;

// loop the array and sum diagonal
   for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
      //sum first diagonal
      if(i === j){
       leftSum += arr[i][j];
      }
      //reversing the 2nd dimension of array to calculate diagonal
      if(i + j === n - 1){
       rightSum += arr[i][j];
      }
      // console.log(leftSum);
   // document.write(i + '-' +leftSum + '-' + rightSum + '<br />');
   }
  }

   // document.write(leftSum);
   // document.write(rightSum);

   var deffirrence = leftSum - rightSum;
   document.write(deffirrence)
   // return Math.abs(deffirrence);
}
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(DiagonDiff(array2));
DiagonDiff(array2)