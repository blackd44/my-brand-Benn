import Message, { messages, addmessage } from "./message.js";

let form = document.querySelector('form.message')

let email = form.querySelector('input[name=email]')
let message = form.querySelector('textarea')
let messageTimeout
let button = form.querySelector('button[type=submit]')
let buttonvalue = button.innerText
let buttonTimeout

function defaultValue() {
    let user = localStorage.getItem('user')
    if (user != null) {
        user = JSON.parse(user)
        email.value = user.email
    }
}
defaultValue()

form.addEventListener('submit', async e => {
    e.preventDefault()
    if (message.value.split(' ').join('').length < 10) {
        messageTimeout = clearTimeout()
        message.style.borderBottomColor = 'red'
        message.style.borderLeftColor = 'red'
        let parent = message.parentElement
        let warn = parent.querySelector('span[name=info]')
        warn.innerText = 'minimum letter is 10 characters'

        messageTimeout = setTimeout(() => {
            message.style.borderBottomColor = 'currentcolor'
            message.style.borderLeftColor = 'currentcolor'
            warn.innerText = ''
            messageTimeout = clearTimeout()
        }, 3000)
        return
    }
    let a = await fetch('http://localhost:4444/api/messages/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value, content: message.value
        })
    }, async res => {
        return res
    })
    if (a.status == 201) {
        email.value = ''
        message.value = ''
        button.innerText = 'Sent'
        button.setAttribute('style', 'background-color: #0a0; color: var(--bright-color);')
        messageTimeout = clearTimeout()
        messageTimeout = setTimeout(() => {
            button.innerText = buttonvalue
            button.removeAttribute('style')
        }, 2000)
        defaultValue()
    }
})