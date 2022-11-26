//1st ost common way to event handler
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

//2nd
/* 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green'
} 
*/

//3rd anonimus function
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//4th event handler
const makeGoldenButton = document.getElementById('make-golden');
makeGoldenButton.addEventListener('click', makeGolden);

function makeGolden() {
    document.body.style.backgroundColor = 'goldenrod'
}
// 5th
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})
//6th
//most common way to event handler
document.getElementById('make-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow'
})


//common way to use event handler

/*  function clickingMethod() {
     const p = document.getElementById('par');
     p.innerText = 'Changed the Text by us';
 
 } */
document.getElementById('clicking-method').addEventListener('click', function () {
    const para = document.getElementById('par');
    para.innerText = ' amar sonar banga'
})

