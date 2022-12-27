import { blogs } from "./blogs.js";
import Date from "../plugin/date.js";

let title = document.querySelector('.blog>div:first-of-type>h2')
let owner = document.querySelector('.blog>div:first-of-type>p')
let body = document.querySelector('.blog .body')
let date = document.querySelector('.blog .date')

const urlParams = new URLSearchParams(location.search);
if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

title.innerText = blog.title
owner.innerText = blog.owner.name
body.innerHTML = blog.body
date.innerText = new Date(blog.createdAt).format('mmm dd, yyyy')

console.log(new Date(blog.createdAt).format('DD mmm dd, yyyy'))