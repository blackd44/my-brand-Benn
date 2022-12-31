import { editor } from "../plugin/richtext/index.js"

let form = document.querySelector('.blog-form')

let body = form.querySelector('*[name=body]')

form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(window.getSelection().toString())
    // console.log(editor.window)
    console.log(editor.getContent())
    console.log(editor.contentDocument.getSelection().toString())
})