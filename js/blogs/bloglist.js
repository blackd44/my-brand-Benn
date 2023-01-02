import { blogs } from "./blogs.js";

let list = document.querySelector('ul.bloglist')

blogs.forEach(blog => {
    let li = document.createElement('li')

    let title = document.createElement('a')
    title.setAttribute('href', `/blogs/view.html?id=${blog.id}`)
    title.innerHTML = `<h2>${blog.title}</h2>`
    li.append(title)

    let owner = document.createElement('p')
    owner.classList.add('date')
    owner.innerText = blog.owner.name
    li.append(owner)

    let body = document.createElement('div')
    body.classList.add('body')

    let content = document.createElement('p')
    content.innerHTML = blog.body
    body.append(content)

    let more = document.createElement('a')
    more.setAttribute('href', `/blogs/view.html?id=${blog.id}`)
    more.innerHTML = `<u class="more">Read More</u>`
    body.append(more)

    li.append(body)

    list.append(li)
})
