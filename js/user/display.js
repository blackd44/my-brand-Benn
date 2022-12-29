import { users } from "./user.js";

let list = document.querySelector('.list.blog ul')

let messageSvg =
    `<svg width="24" height="23" viewBox="0 0 24 23" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.7353 7.01758V4.75H5.2353V7.01758H18.7353ZM18.7353 10.3926V8.125H5.2353V10.3926H18.7353ZM18.7353 13.7676V11.5H5.2353V13.7676H18.7353ZM23.2177 2.48242V22.7324L18.7353 18.25H2.96772C2.37006 18.25 1.84272 18.0215 1.38569 17.5645C0.963814 17.1074 0.752876 16.5801 0.752876 15.9824V2.48242C0.752876 1.88477 0.963814 1.375 1.38569 0.953125C1.84272 0.496094 2.37006 0.267578 2.96772 0.267578H21.0029C21.6005 0.267578 22.1103 0.496094 22.5322 0.953125C22.9892 1.375 23.2177 1.88477 23.2177 2.48242Z"
            fill="#8B8B97" />
    </svg>`;

let deleteSvg =
    `<svg width="19" height="24" viewBox="0 0 19 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.6217 2H14.1994L12.9359 0.75H6.61846L5.35497 2H0.932739V4.5H18.6217M2.19623 20.75C2.19623 21.413 2.46247 22.0489 2.93637 22.5178C3.41027 22.9866 4.05302 23.25 4.72322 23.25H14.8312C15.5014 23.25 16.1441 22.9866 16.618 22.5178C17.0919 22.0489 17.3582 21.413 17.3582 20.75V5.75H2.19623V20.75Z"
            fill="#1D1D20" />
    </svg>`;

users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

users.forEach(user => {
    let li = document.createElement('li')

    let name = document.createElement('a')
    name.innerHTML = `<h2>${user.name}</h2>`
    li.append(name)

    let div = document.createElement('div')
    div.classList.add('flex-between')

    let span = document.createElement('span')
    span.classList.add('grey-color', 'flex-one-line')
    span.innerText = user.email
    div.append(span)

    let event = document.createElement('span')

    let message = document.createElement('a')
    message.setAttribute('href', ``)
    message.innerHTML = messageSvg
    event.append(message)

    let del = document.createElement('a')
    // del.setAttribute('href', ``)
    del.innerHTML = deleteSvg
    /*
    del.addEventListener('click', e => {
        li.setAttribute('class', 'deleted')
        setTimeout(() => {
            // deleteuser(user)
            li.remove()
        }, 2000)
    })
    */
    event.append(del)

    div.append(event)
    li.append(div)

    list.append(li)
})