// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'christmas'; 
favHoliday = favHoliday.toUpperCase()
    console.log(favHoliday)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let favRanger = 'Green Ranger 1'
alert(favRanger.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function minusFiveAbsolute(n1,n2,n3,n4,n5){
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference))
}
minusFiveAbsolute(28,83,42,1,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumsHighLow(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest num is ${min} and the highest is ${max}`)
}
threeNumsHighLow(100,50,25)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
//function headsOrTails(){
//    let result = Math.random()
//    if(result < .5){
//        return 'heads'
//    }else{
//        return 'tails'
//    }
//}
//console.log(headsOrTails())

const headsOrTails = _ => Math.random() < .5 ? 'heads':'tails'
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takesNumFlipFlip(n){
    for(let i=1; 1 <=i; i++){
        let result = headsOrTails()
        console.log(result)
    }
}
takesNumFlipFlip(1)