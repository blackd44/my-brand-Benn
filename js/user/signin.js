import User, { users } from "./user.js";
import { email as validEmail } from "../plugin/validation.js";
import { database } from "../env.js";
import Cookies from "../plugin/cookies.js";

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

form.addEventListener('submit', async e => {
    e.preventDefault()

    let res = await fetch(database + '/users/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value })
    })
    if (res.status == 401) {
        //alert('email or password is incorrect')
        let response = await res.json()
        console.warn(response)
        info.innerText = response.info.message
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
        console.warn(await res.json())
    }
})