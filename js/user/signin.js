import User, { users } from "./user.js";
import { email as validEmail } from "../plugin/validation.js";
import { findIndex, find } from "../plugin/array.js";

let form = document.querySelector('form[name=signin]')

let email = form.querySelector('input[name=email]')
let password = form.querySelector('input[name=password]')
let remember = form.querySelector('input[name=remember]')
let button = form.querySelector('button[type=submit]')
let timeout


email.addEventListener('input', e => {
    checkinputs()
    if (validEmail(email.value) == null) {
        email.parentNode.style.borderBottomColor = 'red'
    }
    else {
        email.parentNode.style.borderBottomColor = '#00aa00'
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            email.parentNode.style.borderBottomColor = 'currentcolor'
        }, 3000)
    }
})

password.addEventListener('input', e => {
    checkinputs()
})

function checkinputs() {
    if (validEmail(email.value) == null || password.value == '') {
        button.disabled = true
    }
    else {
        button.disabled = false
    }
}
checkinputs()

form.addEventListener('submit', e => {
    e.preventDefault()

    let user = find('email', email.value, users)
    if (!user || user.password != password.value) {
        alert('email or password is incorrect')
        email.focus()
        return
    }

    localStorage.setItem('user', JSON.stringify(user))
    window.location.assign('/')
})