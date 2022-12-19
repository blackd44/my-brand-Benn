import newId from "../plugin/id.js";

export default class Message {
    constructor({ name = undefined, email = undefined }, body = undefined) {
        this.id = newId(messages)
        this.owner = { name, email }
        this.body = body
        this.likes = []
        this.shares = []
        this.replies = []
        this.date = new Date()
    }
}

export let messages = localStorage.getItem('messages')
if (messages != null) {
    messages = JSON.parse(messages)
}
else {
    messages = []
}

export const addmessage = function (name = '', email = '', password = '') {
    const a = new Message({ name: name, email: email.toLowerCase() }, password)
    messages.push(a)
    localStorage.setItem('messages', JSON.stringify(messages))
    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: a
    }
}

export function deleteMessage(obj = null) {
    let index = messages.indexOf(obj)
    console.log(index)
    let deleted = messages.splice(index, 1)
    localStorage.setItem('messages', JSON.stringify(messages))

    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: deleted
    }
}