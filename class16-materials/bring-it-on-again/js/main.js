// *Variables*
// Declare a variable, assign it a value, and alert the value
let age = 25
alert(age)

// Create a variable, divide it by 10, and console log the value
let car = 30 /10
console.log(car);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThree(num1, num2, num3){
    alert(num1 * num2 * num3)
}
multThree(4, 6, 8)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function giveMeFour(num1, num2, num3, num4){
    console.log(num1 + num2 - num3 - num4)
}
giveMeFour(12, 17, 10, 5);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function itTakesThree(num1, num2, num3){
    greenbox = ((100 + num1) - num2 / num3)
    if (greenbox > 25) {
        console.log("WE HAVE A WINNNA");
    }
}
itTakesThree(24, 32, 9)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekDay(day){
    day = day.toLowerCase()
    if(day === "Saturday" || day === "Sunday"){
        alert("weekend")
    }else if(""){
        console.log("Try Again!");
    }else{
        console.log("week day");
    }
}
weekDay("Monday")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function takesNum(num1) {
    for (let blue = 1; blue <= num1; blue += 3) {
        console.log(blue);
    }
}
takesNum(75)