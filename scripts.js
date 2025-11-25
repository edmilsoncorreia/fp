let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = document.querySelectorAll('.indicators ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length -1

indicator.querySelector ('.number').innerHTML = active + 1

/*Entender Melhor
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        nextButton.click()      // seta → chama next
    }

    if (e.key === "ArrowLeft") {
        prevButton.click()      // seta ← chama prev
    }
})
*/

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove ('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove ('active')
    dots[active].classList.add('active')
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove ('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    console.log(active)

}