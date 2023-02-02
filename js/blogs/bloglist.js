import { database } from "../env.js"
let blogs = await fetch(database + '/blogs').then(async res => {
    let body = await res.json()
    let out = []
    if (res.status != 200) {
        console.warn(body)
    }
    else {
        out = body.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    return out
}).catch(e => {
    console.error(e)
})

let list = document.querySelector('ul.bloglist')

blogs.forEach(blog => {
    let li = document.createElement('li')

    let img = document.createElement('img')
    img.alt = blog.title
    img.src = blog.image
    li.append(img)


    let body = document.createElement('div')
    body.classList.add('body')

    let link = document.createElement('a')
    link.href = `/blogs/view.html?id=${blog._id}`
    let head = document.createElement('h2')
    head.innerText = blog.title
    link.append(head)
    body.append(link)

    let content = document.createElement('p')
    content.innerHTML = blog.content
    body.append(content)

    let more = document.createElement('a')
    more.href = `/blogs/view.html?id=${blog._id}`
    more.innerHTML = `<u class="more">Read More</u>`
    body.append(more)
    li.append(body)

    list.append(li)
})
