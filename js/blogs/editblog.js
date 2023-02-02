import { blogs, editBlog } from "./blogs.js";
import { editor, container } from "../plugin/richtext/index.js"
import { database } from "../env.js";
import Cookies from "../plugin/cookies.js";

async function imageExists(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function () {
            resolve(true);
        };
        img.onerror = function () {
            resolve(false);
        };
        img.src = url;
    });
}

let token = Cookies.get('token')
if (token !== null) {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('id') === null) {
        window.location.assign('/blogs.html')
    }

    let blog = await fetch(database + '/blogs/' + urlParams.get('id')).then(async res => {
        let body = await res.json()
        let out = null
        if (res.status != 200) {
            console.warn(body)
        }
        else {
            out = body
        }
        return out
    }).catch(e => {
        console.error(e)
    })

    let form = document.querySelector('.blog-form')

    owner.innerText = blog.owner.username
    let body = form.querySelector('*[name=body]')
    let title = form.querySelector('input[name=title]')
    let image = form.querySelector('input[name=image]')
    let img = form.querySelector('img[name=img]')
    image.value = blog.image
    img.src = blog.image

    title.value = blog.title
    editor.setContent(blog.content)

    form.addEventListener('submit', async e => {
        e.preventDefault()

        if ((editor.getTextContent()).trim() == '') {
            container.style.borderColor = 'red'
            setTimeout(() => {
                container.style.borderColor = '#aaa7'
            }, 2000);
            e.preventDefault()
            return
        }

        let exists = await imageExists(image.value).then(exists => exists);

        if (!exists) {
            image.style.borderColor = 'red'
            setTimeout(() => {
                image.style.borderColor = '#aaa7'
            }, 2000);
            image.focus()
            e.preventDefault()
            return
        }
        let updeted = await fetch(database + '/blogs/' + blog._id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify({ image: image.value, title: title.value, content: editor.getContent() })
        }).then(async res => {
            if (res.status !== 204) {
                let content = await res.json()
                if (res.status != 202) {
                    console.log(content)
                    alert(content)
                }
                else {
                    window.location.assign('/blogs/view.html?id=' + content._id)
                }
            }
            else {
                console.log(res.status)
            }
        })
    })
    // console.log(owner)
}