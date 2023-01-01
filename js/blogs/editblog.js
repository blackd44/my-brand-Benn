import { blogs, editBlog } from "./blogs.js";
import { editor, container } from "../plugin/richtext/index.js"

const urlParams = new URLSearchParams(location.search);
if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let user = localStorage.getItem('user')
if (user !== null) {
    user = JSON.parse(user)

    let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

    let form = document.querySelector('.blog-form')

    owner.innerText = blog.owner.name
    let body = form.querySelector('*[name=body]')
    let title = form.querySelector('input[name=title]')

    title.value = blog.title
    editor.setContent(blog.body)

    form.addEventListener('submit', e => {
        e.preventDefault()

        let newBlog = { ...blog }
        newBlog.title = title.value
        newBlog.body = editor.getContent()
        editBlog(newBlog)
    })
    // console.log(owner)
}