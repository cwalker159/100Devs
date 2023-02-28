//Write your pseduo code first! 
// 0 -> 32
//document.querySelector('#yell').addEventListener('click', convert)

// Value is celsius
//function convert() {
  //  let temp = document.querySelector('#cel').value
    
//convert from celsius to farinheight
//temp = temp * 9/5 + 32

//Show it
//document.querySelector('#placeToYell').innerText = temp

//}

//0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    let temp = Number(document.querySelector('#cel').value)

temp = temp * 9/5 +32

document.querySelector('#placeToYell').innerText = temp 

}
