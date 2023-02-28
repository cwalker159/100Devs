//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ['13 Hours', '6 Underground', 'The Adam Project', 'Dune']
   
for(let i = 0; i < movies.length;i++){
    document.querySelector('h2').innerText += movies[i]
}

//Create an array of numbers. Loop through the array and three to each number and add replace the old number.
let nums = ['10','20','30']

nums.forEach((item, idex) => {
    nums[idex] = item + 3 
})
//Find the average of all the numbers from question two
let sum = 0

for(let i = 0; i < nums.length;i++){
    sum += nums[i]
}
console.log( sum / nums.length )
//nums.forEach((num) => sum += num)