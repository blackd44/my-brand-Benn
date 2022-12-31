let container = document.querySelector('#richtext')

export let editor = document.createElement('iframe')

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
        if (pen.dataset.function == 'bold')
            sendCtrlA()
    })
})

function sendCtrlA() {
    var ctrlDownEvent = new KeyboardEvent('keydown', {
        isTrusted: true,
        'keyCode': 17,
        'which': 17,
        'ctrlKey': true
    });

    window.dispatchEvent(ctrlDownEvent);

    var aDownEvent = new KeyboardEvent('keydown', {
        isTrusted: true,
        'keyCode': 66,
        'which': 66
    });

    window.dispatchEvent(aDownEvent);

    var ctrlUpEvent = new KeyboardEvent('keyup', {
        isTrusted: false,
        'keyCode': 17,
        'which': 17,
        'ctrlKey': false
    });

    window.dispatchEvent(ctrlUpEvent);

}

window.addEventListener('keydown', e => {
    console.log(e)
})

