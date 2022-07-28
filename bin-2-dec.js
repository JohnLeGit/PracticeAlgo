/* 
Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 
For example: 
binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5
//101 = (1*2) ^ 2 + (0*1) ^ 1 + (1*2) ^ 0 = 1 4 + 0 + 1 = 5
//100 = (1*2) ^ 2 = 4 + 0 + 0 = 4
so if num === 1 => (num * 2) ^ (i - 1)
so if num === 0 => (num * 1) ^ (i - 1) 
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
*/

/*
input: num 
output: num (that is binary number)

equation: 101 = (1*2) ^ 2 + (0*2) ^ 1 + (1*2) ^ 0 = 1 4 + 0 + 1 = 5
11 = (1*2) ^ 1 + (1*2) ^ 0 = 2 + 1 = 0

common element = *2
*/
function binToDec (binary){
    let index = 0;
    let sum = 0;
    for ( let i = binary.length -1 ; i >= 0; i--){
        if (binary[i] === '1'){
            sum += Math.pow(2,index)
        }
        index++
    } //binary[3]=1 index=0 >>2^0=1
    /*
    0101
    binary[binary.length - 1] = 3
    index = 0 
    => 1 => 1 * 2 ^ 0 = 1
    =>index = 2
    => binary[1]
    => (1*2)^ 2 = 4 
    => sum = 1 + 4 
    */

    return sum;
}
//walk through
//index: 0
//sum: 2^ 0 = 1
//num (11) = 1 
//walk through
//index: 1
//sum: 2^ 1 = 1
//num (11) = 1 
//

console.log(binToDec('0101'))

// for ( let i  = 0 ;  i < binary.length; i++)