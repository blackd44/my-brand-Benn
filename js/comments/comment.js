import newId from "../plugin/id.js"

export default class Comment {
    constructor(parentId = '', { username = '', email = '' }, body = '') {
        this.id = newId(comments)
        this.owner = {
            username: username,
            email: email
        }
        this.body = body
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.likes = []
        this.reply = []
    }
}

export let comments = localStorage.getItem('comments')

if (comments == null) {
    comments = []
}
else {
    comments = JSON.parse(comments)
}

