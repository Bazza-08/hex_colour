const button = document.querySelector('button');
const body = document.querySelector('body');
const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


function changeColor() {
    var hexNumber = "#";
    for (let i=0; i<6; i++) {
        hexNumber += hexColor[Math.floor(Math.random()*hexColor.length)];
    }
    body.style.backgroundColor = hexNumber;
    hexText.textContent = hexNumber;
}

button.addEventListener('click', changeColor);