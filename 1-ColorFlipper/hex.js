const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// #f15025

const btn = document.getElementById('btn')
const colorSpan = document.querySelector(".color")

const getRandomNumber = () => Math.floor(Math.random() * hex.length); 

btn.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    } 

    colorSpan.textContent = hexColor 
    document.body.style.backgroundColor = hexColor
})