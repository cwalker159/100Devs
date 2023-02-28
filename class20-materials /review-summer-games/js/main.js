//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsAndAlert(arr){
    let product = 1
    arr.forEach(num => product *= num)
        alert(product)
}
multiNumsAndAlert([10,2,3])
/* Another way to do it instead of .forEach
 for(let i = 0; num => product *= num)
    product *= arr[i] */



   