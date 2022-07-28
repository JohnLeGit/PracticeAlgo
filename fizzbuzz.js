/*
Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.
fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
*/

function fizzbuzz(num){
    let output = [];
    for ( let i = 1 ; i <= num ; i++){
        if ( i % 3 === 0 ){
            i = 'fizz';
            output.push(i)
        } else {
       output.push(i)
        }
    }
    return output
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
console.log(fizzbuzz())