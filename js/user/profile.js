import Cookies from "../plugin/cookies.js"
import { database, default_profile } from "../env.js";

let token = Cookies.get('token')
if (token == null) {
    window.location.assign('/')
}

let user = await fetch(database + '/users/user', {
    headers: { Authorization: "Bearer " + Cookies.get('token') }
}).then(res => res.json())

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

function changeContainer(image) {
    let infront = document.createElement('div')
    infront.classList.add('infront')

    let back = document.createElement('div')
    back.classList.add('back')
    back.addEventListener('dblclick', e => {
        e.preventDefault()
        infront.remove()
    })
    infront.append(back)

    let form = document.createElement('form')
    let img = document.createElement('img')
    img.alt = 'profile'
    img.onerror = function () {
        img.src = default_profile
    }
    img.src = image
    form.append(img)

    let input = document.createElement('input')
    input.type = 'text'
    input.name = "profile"
    input.placeholder = "Profile-url"
    input.addEventListener('input', e => {
        img.src = input.value
    })
    form.append(input)

    let buttons = document.createElement('div')
    let cancel = document.createElement('button')
    cancel.type = 'reset'
    cancel.innerText = 'Cancel'
    cancel.addEventListener('click', e => {
        img.src = image
        infront.remove()
    })
    buttons.append(cancel)

    let submit = document.createElement('button')
    submit.type = 'submit'
    submit.innerText = 'Change'
    buttons.append(submit)

    form.append(buttons)
    form.addEventListener('submit', async e => {
        e.preventDefault()
        submit.disabled = true
        let exists = await imageExists(input.value).then(exists => exists);

        if (!exists) {
            image.style.borderColor = 'red'
            setTimeout(() => {
                image.style.borderColor = '#aaa7'
            }, 2000);
            image.focus()
            e.preventDefault()
            return
        }

        await fetch(database + '/users/user', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify({ profile: input.value })
        }).then(async res => {
            if (res.status !== 204) {
                let content = await res.json()
                if (res.status != 202) {
                    console.log(content)
                    submit.disabled = false
                    alert(content)
                }
                else {
                    //profile.src = user?.profile
                    Cookies.set('token', content.token, 7)
                    token = content?.token || token
                    user = content?.user || user
                    profile.src = content?.user?.profile

                    infront.remove()
                }
            }
            else {
                submit.disabled = false
                console.log(res.status)
            }
        }).catch(e => {
            console.log(e)
            submit.disabled = false
        })
    })

    infront.append(form)
    document.body.append(infront)
}

let profile = document.querySelector('.profile img[name=profile]')
profile.onerror = function () {
    profile.src = default_profile
}
profile.src = user?.profile

let changePro = document.querySelector('.profile .change')
changePro.addEventListener('click', e => {
    e.preventDefault()
    changeContainer(user?.profile)
})

let updates = document.querySelector('form[name=updateProfile]')
let nameInfo = updates.querySelector('input[name=name]')
nameInfo.value = user?.username
let emailInfo = updates.querySelector('p[name=email]')
emailInfo.innerText = user?.email
let genderInfo = updates.querySelector('select[name=gender]')
genderInfo.value = user?.gender || 'none'
let submit = updates.querySelector('button[type=submit]')

updates.addEventListener('submit', async e => {
    e.preventDefault()
    submit.disabled = true
    submit.classList.add('active')
    let body = {
        username: nameInfo.value,
        gender: genderInfo.value
    }
    await fetch(database + '/users/user', {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + Cookies.get('token'),
        },
        body: JSON.stringify(body)
    }).then(async res => {
        if (res.status !== 204) {
            let content = await res.json()
            if (res.status != 202) {
                console.log(content)
                submit.disabled = false
                alert(content)
            }
            else {
                //profile.src = user?.profile
                console.log(content)
                Cookies.set('token', content.token, 7)
                token = content?.token || token
                user = content?.user || user
                submit.disabled = false
            }
        }
        else {
            submit.disabled = false
            console.log(res.status)
        }
        submit.classList.remove('active')
    }).catch(e => {
        console.log(e)
        submit.disabled = false
        submit.classList.remove('active')
    })
})