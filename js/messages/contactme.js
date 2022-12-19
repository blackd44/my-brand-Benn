import Message, { messages, addmessage } from "./message.js";

let form = document.querySelector('form.message')

let name = form.querySelector('input[name=name]')
let email = form.querySelector('input[name=email]')
let message = form.querySelector('textarea')
let messageTimeout

let user = localStorage.getItem('user')
if (user != null) {
    user = JSON.parse(user)
    name.value = user.name
    email.value = user.email
}

form.addEventListener('submit', e => {
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
    let a = addmessage(name.value, email.value, message.value)
    if (a.success) {
        console.log('message sent')
    }
})