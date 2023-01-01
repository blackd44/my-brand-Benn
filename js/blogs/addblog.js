import { editor, container } from "../plugin/richtext/index.js"
import { blogs, addBlog } from "./blogs.js"

let user = localStorage.getItem('user')
if (user !== null) {
    user = JSON.parse(user)

    let form = document.querySelector('.blog-form')

    let body = form.querySelector('*[name=body]')
    let title = form.querySelector('input[name=title]')

    form.addEventListener('submit', e => {
        e.preventDefault()
        // console.log(window.getSelection().toString())
        // console.log(editor.window)

        if ((editor.getTextContent()).trim() == '') {
            container.style.borderColor = 'red'
            setTimeout(() => {
                container.style.borderColor = '#aaa7'
            }, 2000);
            return
        }

        let newBlog = addBlog(title.value, { name: user.name, email: user.email }, editor.getContent())
        if (newBlog.success) {
            console.log(newBlog)
            window.location.assign('/dashboard/')
        }
    })
}
