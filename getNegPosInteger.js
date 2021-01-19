function getPositiveIntegers(number){
   var num = number.filter(val => val > 0);
   return num;
}

function getNegativeIntegers(number){
    var num = number.filter(val => val < 0);
    return num;
}

function getZeros(number){
    var num = number.filter(val => val === 0);
    return num;
}

var arr = [-4,3,-9,0,4,1];
document.write(arr + '<br />') // original value
var reducer = (accVal, currVal) => accVal + currVal;
//remove duplicate
var noDuplicate = arr.filter((value, index) => arr.indexOf(value) === index);

//get the array lenth value
var arrayLength = arr.length;

// get negative integer and add
var neg = getNegativeIntegers(arr);
var negRatio = neg.length / arrayLength;
document.write(negRatio.toFixed(6) + '<br />');
var rneg = neg.reduce(reducer);
document.write(neg + '=' + rneg + '<br />');

// get positive integer and add
var pos = getPositiveIntegers(arr);
var posRatio = pos.length / arrayLength;
document.write(posRatio.toFixed(6) + '<br />');
var rpos = pos.reduce(reducer);
document.write(pos + '=' + rpos + '<br />');

// get zero and remove duplicate value
var zero = getZeros(noDuplicate);
var zeroRatio = zero.length / arrayLength;
document.write(zeroRatio.toFixed(6));

// Complete the plusMinus function below. -> hackerrank
// Complete the plusMinus function below.
// function plusMinus(arr) {
//     // var reducer = (accVal, currValue) => accVal + currValue;
//     var getNegativeInt = arr.filter(val => val < 0);
//     var getPositiveInt = arr.filter(val => val > 0);
//     var getZero = arr.filter(val => val === 0);
    
//     var positiveRatio = getPositiveInt.length / arr.length;
//     console.log(positiveRatio.toFixed(6));
    
//     var negativeRatio = getNegativeInt.length / arr.length;
//     console.log(negativeRatio.toFixed(6));
    
//     var zeroRatio = getZero.length / arr.length;
//     console.log(zeroRatio.toFixed(6));
//     }
    