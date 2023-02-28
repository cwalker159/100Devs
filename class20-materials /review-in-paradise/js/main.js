// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'dominoes'
food = 'pizza'

alert(food) 

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'Hello, Twitch!'
//alert(str[1])

 alert(str.charAt[1])
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takesThreeNums(n1,n2,n3){
   alert(n1 / n2) * n3

}
takesThreeNums(12,3,4)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRootIt(Robot){
    console.log( Math.cbrt(Robot).toFixed(4))
}
cubeRootIt(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(){
    let monthLowerCase = month.toLowerCase
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('Yay')

    }else{
        alert('Boo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5s(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 ! == 0){
            console.log(i)
        }
    }
}