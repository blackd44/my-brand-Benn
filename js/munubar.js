let munubar = document.querySelector('header .menu')
let header = document.querySelector('header')
let nav = document.querySelector('header ul#head')
let body = document.querySelector('body')
const ua = navigator.userAgent;


let menuActive = false
let navtra = '90vw'

function checkWidth() {
    if (
        (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) &&
        (window.outerWidth > 1366)
    ) {
        nav.style.translate = '0'
        header.style.position = 'absolute !important'
    }
    else if (
        !(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) &&
        (window.outerWidth > 800)
    ) {
        nav.style.translate = '0'
        header.style.position = 'absolute !important'
    }
    else {
        nav.style.translate = navtra
        header.style.position = 'fixed'
    }
    console.log(window.innerWidth)
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        if (window.outerWidth > 700) {
            body.style.fontSize = '120%'
        }
        else if (window.outerWidth > 450) {
            body.style.fontSize = '150%'
        }
        else {
            body.style.fontSize = '180%'
        }
        //console.log(window.outerWidth)
    }
}

checkWidth()

munubar.addEventListener('click', e => {
    if (!menuActive) {
        munubar.classList.add('active')
        menuActive = true
        navtra = '0'
        checkWidth()
    }
    else {
        munubar.classList.remove('active')
        menuActive = false
        navtra = '90vw'
        checkWidth()
    }
})

window.addEventListener('resize', e => {
    checkWidth()
})