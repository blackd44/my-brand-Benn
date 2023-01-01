import { blogs } from "./blogs.js";
import { editor, container } from "../plugin/richtext/index.js"

const urlParams = new URLSearchParams(location.search);
if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let user = localStorage.getItem('user')
if (user !== null) {
    user = JSON.parse(user)

    let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

    owner.innerText = blog.owner.name
    console.log(owner)
}