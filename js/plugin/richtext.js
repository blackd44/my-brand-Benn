tinymce.init({
    selector: '#richtext',
    plugins: [
        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
        'alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
});

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    // Get the HTML contents of the currently active editor
    let body = tinymce.get('richtext').getContent()
    console.log(body)
    let all = document.createElement('div')
    all.innerHTML = body
    out.innerHTML = ''
    out.append(all)
    // Get the contents of the currently active editor as plain text
    //console.log(tinymce.activeEditor.getContent({ format: 'text' }));
})