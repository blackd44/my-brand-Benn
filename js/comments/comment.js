import newId from "../plugin/id.js"

export default class Comment {
    constructor(parentId = '', { username = '', email = '' }, body = '') {
        this.id = newId(comments)
        this.parentId = parentId
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
    addComment("000001", { username: 'Benn Dalton', email: 'benn@email.com' }, "I hope Mantis has a bigger role to play in the MCU, not only in GotG3 but beyond it. Such a cool concept for a character")
    addComment("000000", { username: 'Benn Dalton', email: 'benn@email.com' }, "Why would killing Ego take Peter’s Celestial powers away, but not that of all his half siblings as well?")
    addComment(
        "000001",
        { username: 'Iradukunda', email: 'ira@email.com' },
        `Okay, I like this idea, but I'd really hope that we get to meet a new character (that is written in a compelling manner, of course). There's always the danger of succumbing to "small universe" syndrome where everyone is connected to everyone else, which feels more like a tired sitcom than a vibrant universe. Plus, introducing new characters keeps the revolving door of actors fresh when the current ones get too old or too expensive to keep playing the parts on the regular.`
    )
}
else {
    comments = JSON.parse(comments)
}

export function addComment(postId = '', owner = null, body = '') {
    try {
        const a = new Comment(postId, owner, body)
        comments.unshift(a)
        localStorage.setItem('comments', JSON.stringify(comments))
        return {
            success: true,
            action: 'success',
            message: 'success',
            data: 'success',
            value: a
        }
    }
    catch (e) {
        console.log(e)
    }
}
