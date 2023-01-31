import { email as validEmail } from "../plugin/validation.js";
import Cookies from "../plugin/cookies.js";
import { database } from "../env.js";

let form = document.querySelector('form[name=signup]')

let name = form.querySelector('input#name')
let email = form.querySelector('input#email')
let password = form.querySelector('input#password')
let rePass = form.querySelector('input#rePassword')
let remember = form.querySelector('input[name=remember]')
let button = form.querySelector('button[type=submit]')
name.timeout = null
email.timeout = null
password.timeout = null
rePass.timeout = null

name.addEventListener('input', e => {
    checkinputs(e.target)
})
email.addEventListener('input', e => {
    checkinputs()
    clearTimeout(email.timeout)
    if (validEmail(email.value) === null) {
        email.parentNode.style.borderBottomColor = 'red'
        email.timeout = setTimeout(() => {
            email.parentNode.style.borderBottomColor = 'currentcolor'
            clearTimeout(email.timeout)
        }, 3000);
    }
    else {
        email.parentNode.style.borderBottomColor = 'currentcolor'
    }
})
password.addEventListener('input', e => {
    checkinputs(e.target)
})
rePass.addEventListener('input', e => {
    checkinputs(e.target)
})

function checkinputs(el = undefined) {
    if (
        validEmail(email.value) == null ||
        name.value.length < 3 ||
        password.value.length < 3 ||
        rePass.value.length < 3
    ) {
        button.disabled = true
    }
    else {
        button.disabled = false
    }

    if (el) {
        if (el.value.length < 3) {
            el.parentNode.style.borderBottomColor = 'red'
        }
        else {
            el.parentNode.style.borderBottomColor = '#00aa00'
            clearTimeout(el.timeout)
            el.timeout = setTimeout(() => {
                el.parentNode.style.borderBottomColor = 'currentcolor'
            }, 3000)
        }
    }
}

form.addEventListener('submit', async e => {
    e.preventDefault()

    let res = await fetch(database + '/users/signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value, username: name.value })
    })
    if (res.status == 400) {
        //alert('email or password is incorrect')
        let response = await res.json()
        console.warn(response)
        info.innerText = response?.error?.message || response?.message
        email.parentNode.style.borderBottomColor = 'red'
        const emailtimeout = setTimeout(() => {
            email.parentNode.style.borderBottomColor = 'currentcolor'
            clearTimeout(emailtimeout)
        }, 3000);
        email.value = ''
        email.focus()
        return
    }
    else if (res.status == 200) {
        let response = await res.json()
        Cookies.set('token', response.token, 2)
        window.location.assign('/')
        return
    }
    else {
        console.error(await res.json())
    }
})

console.log(remember)