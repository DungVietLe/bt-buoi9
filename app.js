let hiddenBox = document.querySelector('#hiddenbox');

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {
    if (hiddenBox.classList.contains('openbox')) {
        hiddenBox.classList.remove('openbox')
    } else {
        hiddenBox.classList.add('openbox');

    }
});

let swapbox1 = document.querySelector('.swapbox1');

let swapbox2 = document.querySelector('.swapbox2');
let newValue1 = swapbox1.innerText;
let newValue2 = swapbox2.innerText;

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function() {
        if (swapbox1.innerText === newValue1) {
            swapbox1.innerText = newValue2;
            swapbox2.innerText = newValue1;
        } else if (swapbox1.innerText === newValue2) {
            swapbox1.innerText = newValue1;
            swapbox2.innerText = newValue2;
        }
    })
    //
let changeColor = document.querySelector('.changeColor');
console.log();
let btn3 = document.querySelector('.btn3')
const colors = [
    "#00aefd",
    "#ffa400",
    "#07a787",
    "#ff7870",
    "black",
    "pink",
    "yellow",
    "#e74c3c",
    "#2979ff",
    "red",
    "blue"
];
btn3.addEventListener('click', function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let strColor = 'background-color:' + randomColor;
    changeColor.setAttribute('style', strColor)
        //cách 2
        // changeColor.style.backgroundColor = randomColor
});


//
let btn4 = document.querySelector('.btn4')

let fontSize = document.querySelector('.fontSize')
let size = 14;


btn4.addEventListener('click', function() {

    fontSize.style.fontSize = `${size++}px`
})
