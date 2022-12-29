let munubar = document.querySelector('header .menu')
let header = document.querySelector('header')
let nav = document.querySelector('header ul#head')
let body = document.querySelector('body')

let menuActive = false
let navtra = '90vw'

function change(n, h) {
    nav != null ? nav.style.translate = n : undefined
    header != null ? header.style.position = h : undefined
}

function checkWidth() {
    const ua = navigator.userAgent;
    if (
        (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) &&
        (window.outerWidth > 1366)
    ) {
        change('0', 'absolute !important')
    }
    else if (
        !(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) &&
        (window.innerWidth > 800)
    ) {
        change('0', 'absolute !important')
    }
    else {
        change(navtra, 'fixed')
    }

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

munubar != null ? munubar.addEventListener('click', e => {
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
}) : undefined;

window.addEventListener('resize', e => {
    checkWidth()
})

let user = localStorage.getItem('user')
if (user != null) {
    user = JSON.parse(user)
    // console.log(user)
    let sign = document.querySelector('ul#head a[href*=\\/sign]')
    if (sign) {
        sign.removeAttribute('href')
        sign.innerHTML = ''

        let li = document.createElement('li')
        let div = document.createElement('div')
        li.classList.add('profile')
        div.classList.add('profile')
        let img = document.createElement('img')
        img.alt = user.name
        img.src = user.profile
        div.append(img)
        li.append(div)
        sign.append(li)

        let dropdown = document.createElement('div')
        dropdown.classList.add('submenu')
        let article1 = document.createElement('article')

        let menu_profile = document.createElement('a')
        //menu_profile.setAttribute('href', '/profile')
        menu_profile.innerText = 'profile'
        article1.append(menu_profile)

        let menu_dashboard = document.createElement('a')
        menu_dashboard.href = '/dashboard/'
        menu_dashboard.innerText = 'dashboard'
        article1.append(menu_dashboard)

        let menu_addblog = document.createElement('a')
        menu_addblog.href = '/blogs/add.html'
        menu_addblog.innerText = 'add blog'
        article1.append(menu_addblog)

        dropdown.append(article1)
        let article2 = document.createElement('article')

        let menu_signout = document.createElement('a')
        menu_signout.href = '/signout/'
        menu_signout.innerText = 'signout'
        menu_signout.addEventListener('click', e => {
            e.preventDefault()
            signOut()
        })
        menu_signout.style.color = '#f00'
        article2.append(menu_signout)

        dropdown.append(article2)

        sign.append(dropdown)
    }

    let dash_profile = document.querySelector('.me .icon')
    if (dash_profile) {
        let img = document.createElement('img')
        img.alt = user.name
        img.src = user.profile
        dash_profile.append(img)
    }
}

export function signOut() {
    localStorage.removeItem('user')
    window.location.assign('/')
}