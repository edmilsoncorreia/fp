let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = document.querySelectorAll('ul li')
let active = 0
let firstPosition = 0
let lastPosition = items.length -1


nextButton.onclick = () => {

    //Tentativa Alterar Active Dots


    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove ('active')

    //let liOld = indicators.querySelector('ul li.active')
    //liOld.classList.remove ('active')
    
    active = active >= lastPosition ? 0 : active + 1

    items[active].classList.add('active')

    //dots[active].classList.add('.active')

    console.log(active)
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove ('active')

    active = active <= firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    console.log(active)

    
}