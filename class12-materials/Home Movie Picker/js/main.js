const cover1 = document.querySelector('.cover1')
const cover2 = document.querySelector('.cover2')
const cover3 = document.querySelector('.cover3')

const radio1 = document.querySelector('radio1')
const radio2 = document.querySelector('radio2')
const radio3 = document.querySelector('radio3')

document.querySelector('#Channel1').addEventListener('click', channel1)
document.querySelector('#Channel2').addEventListener('click', channel2)
document.querySelector('#Channel3').addEventListener('click', channel3)

function channel1(){
    cover2.classList.add('hidden2')
    cover3.classList.add('hidden3')
    cover1.classList.toggle('hidden1')
   // radio1.classList.toggle('hidden10')
}

function channel2(){
    cover1.classList.add('hidden1')
    cover3.classList.add('hidden3')
    cover2.classList.toggle('hidden2') 
    radio2.classList.toggle('hidden11')
}

function channel3(){
    cover1.classList.add('hidden1')
    cover2.classList.add('hidden2')
    cover3.classList.toggle('hidden3') 
    radio3.classList.toggle('hidden12')
}
//
///$('button1').click(function channel1(){
///    if ( true ) {
///       audio.play();
//}
//});