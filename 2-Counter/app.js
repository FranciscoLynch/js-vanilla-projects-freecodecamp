// set initial count
let count = 0

// select value and buttons

const value = document.querySelector('#value')

const btns = document.querySelectorAll('.btn')
// btns return a list

btns.forEach(btn => btn.addEventListener('click', (event) => {
    const styles = event.currentTarget.classList

    styles.contains('decrease') ? count-- : styles.contains('increase') ? count++ : count = 0;

    if (count > 0) value.style.color = "green"
    if (count < 0) value.style.color = "red"
    if (count == 0) value.style.color = "#222"
    value.textContent = count
}))
