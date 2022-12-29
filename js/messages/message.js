import newId from "../plugin/id.js";

export default class Message {
    constructor({ name = undefined, email = undefined }, body = undefined) {
        this.id = newId(messages)
        this.owner = { name, email }
        this.body = body
        this.likes = []
        this.shares = []
        this.replies = []
        this.createdAt = new Date()
        this.createdAt = new Date()
    }
}

export let messages = localStorage.getItem('messages')

export const addmessage = function (name = '', email = '', body = '') {
    const a = new Message({ name: name, email: email.toLowerCase() }, body)
    messages.unshift(a)
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

if (messages != null) {
    messages = JSON.parse(messages)
}
else {
    messages = []
    addmessage("Benn Dalton", "irabd44@gmail.com", "hello there, I'm testing the message. hello there, I'm testing the message. hello there, I'm testing the message. hello there, I'm testing the message. hello there, I'm testing the message. hello there, I'm testing the message.")
    addmessage("Benn Dalton", "irabd44@gmail.com", "hello again, now I'm testing the unshift in adding the new message. hello again, now I'm testing the unshift in adding the new message. hello again, now I'm testing the unshift in adding the new message. hello again, now I'm testing the unshift in adding the new message. hello again, now I'm testing the unshift in adding the new message.")
}