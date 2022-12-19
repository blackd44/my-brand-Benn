import Message, { messages, deleteMessage } from './message.js'

let list = document.querySelector('.list.blog ul')

let shareSvg =
    `<svg width="19" height="16" viewBox="0 0 19 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.52941 4.05882V0.0588226L0.529411 7.05882L7.52941 14.0588V9.95882C12.5294 9.95882 16.0294 11.5588 18.5294 15.0588C17.5294 10.0588 14.5294 5.05882 7.52941 4.05882Z"
            fill="black" />
    </svg>`;

let deleteSvg =
    `<svg width="19" height="24" viewBox="0 0 19 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.6217 2H14.1994L12.9359 0.75H6.61846L5.35497 2H0.932739V4.5H18.6217M2.19623 20.75C2.19623 21.413 2.46247 22.0489 2.93637 22.5178C3.41027 22.9866 4.05302 23.25 4.72322 23.25H14.8312C15.5014 23.25 16.1441 22.9866 16.618 22.5178C17.0919 22.0489 17.3582 21.413 17.3582 20.75V5.75H2.19623V20.75Z"
            fill="#1D1D20" />
    </svg>`;

messages.forEach(message => {
    console.log(message)

    let li = document.createElement('li')

    let title = document.createElement('a')
    title.innerHTML = `<h1>${message.owner.name}</h1>`
    li.append(title)

    let div = document.createElement('div')
    div.classList.add('flex-between')

    let span = document.createElement('span')
    span.classList.add('grey-color', 'flex-one-line')
    span.innerText = message.body
    div.append(span)

    let event = document.createElement('span')

    let edit = document.createElement('a')
    edit.setAttribute('href', ``)
    edit.innerHTML = shareSvg
    event.append(edit)

    let del = document.createElement('a')
    // del.setAttribute('href', ``)
    del.innerHTML = deleteSvg
    del.addEventListener('click', e => {
        li.setAttribute('class', 'deleted')
        setTimeout(() => {
            deleteMessage(message)
            li.remove()
        }, 2000)
    })
    event.append(del)

    div.append(event)
    li.append(div)

    list.append(li)
})