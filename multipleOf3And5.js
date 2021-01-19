function multipleOf3And5(n){
    var sum = 0;
    for (var i = 1; i <= n; i++)
    {
        if(i % 3 === 0 && i % 5 === 0){
            document.write('Fizzbuzz=>' + i + '<br />')
        }else{
            if (i % 3 === 0){
                document.write('Fizz=> ' + i + '<br />')
            //    sum = sum + i;
            }else if(i % 5 === 0){
                document.write('buzz=> ' + i + '<br />')
            } else{
                document.write(i + '<br />')
            }
        }

        // document.write(i + '<br />');
        // console.log(sum);
    }
}
multipleOf3And5(15);