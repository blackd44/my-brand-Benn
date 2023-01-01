export let container = document.querySelector('#richtext')

export let editor = document.createElement('iframe')

let box = container.querySelector('.container')

if (box !== null)
    box.append(editor)
else
    container.append(editor)

let link = document.createElement('link')
link.rel = "stylesheet"
link.href = "/style.css"

editor.contentDocument.head.append(link)

editor.contentDocument.body.classList.add('editor-body')

let div = document.createElement('p')
div.append(document.createElement('br'))
editor.contentDocument.body.innerHTML = '<p><br></p>'

editor.contentDocument.designMode = 'on'

editor.getContent = function () {
    return editor.contentDocument.body.innerHTML
}

editor.getTextContent = function () {
    return editor.contentDocument.body.innerText
}

let pens = container.querySelectorAll('.pens')
pens.forEach(pen => {
    pen.addEventListener('click', e => {
        e.preventDefault()
        // console.log(pen.dataset)
        if (pen.dataset.function == 'bold') { }
        // sendCtrlA()
    })
})
