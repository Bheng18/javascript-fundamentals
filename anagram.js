//input (a, b)
//check the length of a
//count char that not exist in b 
//check the length of b
//check if character in a has also in b
// if none print no anagram 
//if has print
function getLetter(letter){
    var m = letter.match(/[a-z]/gi).sort();
    return m === null ? 0 : m; 
}

// function getLengthLength(letter){
//     var m = letter.match(/[A-Z]/gi);
//     return m === null ? 0 : m.length;
// }

function makeAnagram(a, b) {
  var aVal = getLetter(a);
  var bVal = getLetter(b);
  console.log('A: ' + aVal);
  console.log('B: ' + bVal);

  //get the double occurence of character

//count the deleted character from a and b in which is not
//get the same value of both array
var getSameValueOfArrayA = aVal.filter(v => bVal.indexOf(v) !== -1);
console.log('same value in A array: ' + getSameValueOfArrayA);
var getSameValueOfArrayB = bVal.filter(v => aVal.indexOf(v) !== -1);
console.log('same value in B array: ' + getSameValueOfArrayB);

//check if the same value length are equal 
// if(getSameValueOfArrayA.length != getSameValueOfArrayB.length) return false;
//count the element value of A not equal B value
// query to get unique
var countDeletionsA = aVal.filter(v => !getSameValueOfArrayA.some(sameValue => v === sameValue));
var countDeletionsB = bVal.filter(v => !getSameValueOfArrayB.some(sameValue => v === sameValue));

//remove duplicate that not equal to A and B
// var countDelA = countDeletionsA.filter((value, index) => countDeletionsA.indexOf(value) === index);
// var countDelB = countDeletionsB.filter((value, index) => countDeletionsB.indexOf(value) === index);

    console.log(countDeletionsA + ' = A len:' + countDeletionsA.length);
    console.log(countDeletionsB + ' = B len:' + countDeletionsB.length);

//add deletions of A and B
var allDeletions = countDeletionsA.length + countDeletionsB.length;

console.log('all deletions =', + allDeletions);
}
    let arrayA = 'fcrxzwscanmligyxyvym';
    let arrayB = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
    // let arrayA = 'cde';
    // let arrayB = 'abc';

makeAnagram(arrayA, arrayB);
