const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById('btn')

const colorSpan = document.querySelector(".color")

const getRandomNumber = () => Math.floor(Math.random() * colors.length); 

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    colorSpan.textContent = colors[randomNumber]
}) 
