import { blogs, editBlog } from "./blogs.js";
import { users } from "../user/user.js";
import { addComment, comments } from "../comments/comment.js";
import Date from "../plugin/date.js";

let likeSvg =
    `<svg width=" 22" height="27" viewBox="0 0 22 27" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20.2294 11.25C20.2294 10.0013 19.4378 9 18.4703 9H12.9116L13.756 3.85875C13.7735 3.74625 13.7823 3.6225 13.7823 3.49875C13.7823 3.0375 13.6328 2.61 13.3953 2.30625L12.463 1.125L6.67567 8.5275C6.35024 8.94375 6.15674 9.50625 6.15674 10.125V21.375C6.15674 21.9717 6.34208 22.544 6.67197 22.966C7.00186 23.3879 7.44928 23.625 7.91582 23.625H15.8317C16.5617 23.625 17.1862 23.0625 17.45 22.2525L20.1062 14.3212C20.1854 14.0625 20.2294 13.7925 20.2294 13.5V11.25ZM0.879517 23.625H4.39767V10.125H0.879517V23.625Z"
        fill="#8B8B97" />
</svg>`;

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

let commentList = document.querySelector('.comments ul')
let addCommentForm = document.querySelector('.comments form[name=addComment]')

let blogComments = comments
    .filter(c => c.parentId == blog.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

if (user == null) {
    addCommentForm.remove()
}
else {
    let img = addCommentForm.querySelector('img.profile-image')
    img.src = user.profile
    img.alt = user.name
    let newComment = addCommentForm.querySelector('textarea')

    addCommentForm.addEventListener('submit', e => {
        e.preventDefault()
        let a = addComment(blog.id, user.email, newComment.value)
        if (a.success) {
            commentList.prepend(commentItem(a.value))
            blogComments.unshift(a.value)
            newComment.value = ''
            getCommentN()
        }
        console.log(a)
    })
}

function getCommentN() {
    let n = document.querySelector('.comments .n')
    n.innerText = blogComments.length + ' ' + ((blogComments.length == 1) ? 'Comment' : 'Comments')
}
getCommentN()
blogComments.forEach(comment => commentList.append(commentItem(comment)));

function commentItem(comment) {
    let { profile: img, name: username } = users.filter(u => u.email == comment.email)[0]

    let li = document.createElement('li')

    let profile = document.createElement('img')
    profile.classList.add('profile-image')
    profile.src = img
    profile.alt = username
    li.append(profile)

    let aside = document.createElement('aside')

    let div1 = document.createElement('div')
    let a = document.createElement('a')
    a.innerHTML = `<b>@${username}</b>`
    div1.append(a)

    let date = document.createElement('span')
    date.innerText = (new Date(comment.createdAt)).format("dd-mmm")
    div1.append(date)

    aside.append(div1)

    let content = document.createElement('div')
    content.innerText = comment.body
    aside.append(content)

    let div3 = document.createElement('div')

    let p = document.createElement('p')
    p.dataset.info = 'likes'
    p.innerHTML = likeSvg
    let likes = document.createElement('b')
    likes.innerText = comment.likes.length
    p.append(likes)
    div3.append(p)

    let reply = document.createElement('b')
    reply.innerText = 'Reply'
    div3.append(reply)

    aside.append(div3)

    li.append(aside)

    return li
}