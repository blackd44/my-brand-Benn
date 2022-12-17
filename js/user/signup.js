import { email as validEmail } from "../plugin/validation.js";
import { adduser } from "./user.js";

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

form.addEventListener('submit', e => {
    e.preventDefault()

    let info = adduser(name.value, email.value, password.value)
    if (info.success) {
        let user = info.value
        localStorage.setItem('user', JSON.stringify(user))
        window.location.assign('/')
    }
    else {
        email.parentNode.style.borderBottomColor = 'red'
        const emailtimeout = setTimeout(() => {
            email.parentNode.style.borderBottomColor = 'currentcolor'
            clearTimeout(emailtimeout)
        }, 3000);
        email.value = ''
        email.focus()
    }
})

console.log(remember)