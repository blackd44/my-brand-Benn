import newId from "../plugin/id.js"

export default class User {
    constructor(name = '', email = '', password = '') {
        this.profile = '/images/User-Profile.png'
        this.id = newId(users)
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = new Date()
        this.createdAt = new Date()
    }
}

export let users = []

export const adduser = function (name = '', email = '', password = '') {
    for (let i in users) {
        if (users[i].email === email)
            return {
                success: false,
                action: 'fail',
                message: 'email has been taken',
                data: 'email has been taken',
                value: { name, email, password, }
            }
    }
    const a = new User(name, email.toLowerCase(), password)
    users.unshift(a)
    localStorage.setItem('users', JSON.stringify(users))
    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: a
    }
}

if (localStorage.getItem('users') == null) {
    adduser('Benn Dalton', 'benn@email.com', '1234')
    adduser('Iradukunda', 'ira@email.com', '1234')
}
users = JSON.parse(localStorage.getItem('users'))