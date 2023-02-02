import { database, image_holder } from "../env.js"
import Cookies from "../plugin/cookies.js"
import { editor, container } from "../plugin/richtext/index.js"
import { blogs, addBlog } from "./blogs.js"

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
    let form = document.querySelector('.blog-form')

    owner.innerText = 'username'
    let body = form.querySelector('*[name=body]')
    let title = form.querySelector('input[name=title]')
    let image = form.querySelector('input[name=image]')
    let img = form.querySelector('img[name=img]')

    form.addEventListener('submit', async e => {
        e.preventDefault()
        // console.log(window.getSelection().toString())
        // console.log(editor.window)

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
        let blog = await fetch(database + '/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify({ image: image.value, title: title.value, content: editor.getContent() })
        }).then(async res => {
            let content = await res.json()
            if (res.status != 202) {
                console.log(content)
                alert(content)
            }
            else {
                window.location.assign('/blogs/view.html?id=' + content._id)
            }
        })

        /*
        if (newBlog.success) {
            console.log(newBlog)
        }
        */
    })
}
