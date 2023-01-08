import { blogs, editBlog } from "./blogs.js";
import Date from "../plugin/date.js";

let title = document.querySelector('.blog>div:first-of-type>h2')
let owner = document.querySelector('.blog>div:first-of-type>p')
let body = document.querySelector('.blog .body')
let date = document.querySelector('.blog .date')
let likes = document.querySelector('.info>*[data-info=likes]')

const urlParams = new URLSearchParams(location.search);
if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

title.innerText = blog.title
owner.innerText = blog.owner.name
body.innerHTML = blog.body
date.innerText = new Date(blog.createdAt).format('mmm dd, yyyy')
let user = localStorage.getItem('user')
if (user != null) {
    user = JSON.parse(user)

    function likeColor() {
        if (blog.likes.includes(user.email))
            likes.classList.add('active')
        else
            likes.classList.remove('active')
    }
    likeColor()

    likes.addEventListener('click', e => {
        e.preventDefault()
        let index = blog.likes.indexOf(user.email)
        if (index != -1)
            blog.likes.splice(index, 1)
        else
            blog.likes.unshift(user.email)

        editBlog(blog)
        likeColor()
        printLikes()

        console.log(blog.likes)
    })
}

function printLikes() {
    likes.querySelector('span').innerText = blog.likes.length
}
printLikes()