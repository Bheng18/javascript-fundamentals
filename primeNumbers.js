
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function display(n) {
    var arr = [2];
    // var arr = []; 
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            // var even = i * 2; //add prime numbers to become even
            arr.push(i);
         console.log(arr);
        }  
    }
    document.getElementById("res").innerHTML = arr;
}
display(100);