function compareTriplets(a, b){
var result = [];
var aScore = 0;
var bScore = 0;
   for(let i = 0; i<a.length; i++){
       if(a[i] > b[i]) aScore++;
       if(a[i] < b[i]) bScore++;
       if(a[i] === b[i]) 
         aScore[i] = bScore[i];
       document.write(i + '<br />');
       document.write('A ' + a[i] + ', ');
       document.write('B ' + b[i] + '<br />');
   }
   result.push(aScore, bScore);
   document.write(result);
}

var a = [17, 28, 30];
var b = [99, 16, 8]

compareTriplets(a, b);