let munubar = document.querySelector('header .menu')
let nav = document.querySelector('header ul#head')

let menuActive = false

munubar.addEventListener('click', e => {
    if (!menuActive) {
        munubar.classList.add('active')
        menuActive = true
        nav.style.translate = '0'
        nav.parentNode.style.position = 'fixed'
    }
    else {
        munubar.classList.remove('active')
        menuActive = false
        nav.style.translate = '90vw'
        nav.parentNode.style.position = 'absolute'
    }
})