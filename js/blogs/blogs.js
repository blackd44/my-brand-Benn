import newId from "../plugin/id.js"

export default class Blog {
    constructor(title = '', owner = null, body = null) {
        this.id = newId(blogs)
        this.title = title
        this.owner = owner
        this.body = body
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.likes = []
        this.comments = []
        this.shares = []
    }
}

export let blogs = []

export function addBlog(title = '', owner = null, body = '') {
    const a = new Blog(title, owner, body)
    blogs.push(a)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: a
    }
}
export function deleteBlog(obj = null) {
    let index = blogs.indexOf(obj)
    let deleted = blogs.splice(index, 1)
    localStorage.setItem('blogs', JSON.stringify(blogs))

    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: deleted
    }
}

if (localStorage.getItem('blogs') === null) {
    let one = {
        title: 'test1',
        owner: {
            name: "benn",
            email: "benn@email.com"
        },
        body: `<p>A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read</p>\n<p>
            <img src=\"https://604now.com/wp-content/uploads/2018/02/banff_town.jpg\" alt=\"\" width=\"1220\" height=\"813\"></p>\n
            <p>A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read</p>\n
            <p>
                <img src=\"https://www.arkwildlife.co.uk/wp-content/uploads/2022/07/male-red-bullfinch-bird.jpg\" alt=\"\" width=\"259\" height=\"194\"></p>\n
            <p>A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read</p>`,
    }
    let two = {
        title: 'title',
        owner: {
            name: "dalton",
            email: "dalton@email.dom"
        },
        body: `<p><img src=\"https://www.birdlife.org/wp-content/uploads/2022/09/Pelican_portrait_high-res-scaled.jpg\" alt=\"\" width=\"1341\" height=\"651\"></p>\n<p><strong>A regular record</strong> of your thoughts, opinions, <em><strong>or experiences that you put</strong></em> on the internet for other people to read, a regular record of your thoughts, <em>opinions</em>, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read</p>\n<p><iframe style=\"width: 1021px; height: 573px;\" src=\"https://www.youtube.com/embed/z2HxdYDf0gQ\" width=\"1021\" height=\"573\" allowfullscreen=\"allowfullscreen\"></iframe></p>\n<p>A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read&nbsp;</p>\n<p><img src=\"https://www.arkwildlife.co.uk/wp-content/uploads/2022/07/male-red-bullfinch-bird.jpg\" alt=\"\" width=\"988\" height=\"494\"></p>`,
    }
    addBlog(one.title, one.owner, one.body)
    addBlog(two.title, two.owner, two.body)
}

blogs = JSON.parse(localStorage.getItem('blogs'))