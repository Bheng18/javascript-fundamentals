
// document.getElementById("res").innerHTML = sum;

function fibonacci(n){
    var num1 = 0, num2 = 1, sum = 0; // n = 20;
    console.log(num1);
    console.log(num2);
    for(i=2; i<n; i++){
        sum=num1+num2;  
     console.log('' + sum);
     num1=num2;
     num2=sum;
    }
}

fibonacci(10);