
// Dark THEME

const head = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const footer = document.querySelector('.footer')
const switch_bar = document.querySelector('.dark')



function theme() {
    head.classList.toggle('toggle-dark')
    sidebar.classList.toggle('toggle-dark')
    content.classList.toggle('toggle-dark')
    footer.classList.toggle('toggle-dark')
    switch_bar.classList.toggle('toggle_dark_button')
}

switch_bar.addEventListener('click', theme, false)

//Note area Array and the Note area

const notesArray = []

function defineNoteAreaSection() {
    html = `
    <div id="note-area">
        <div id="note" contenteditable="true"></div>
        <button id="saveButton" onclick="saveNote()">save</button>
        <button id="deleteButton" onclick="deleteNote()">delete</button>
    </div>
    `
    return html
}

function createContent() {
    const saveDeletebutton = document.querySelector('#contentNote')
    saveDeletebutton.insertAdjacentHTML('beforeend', defineNoteAreaSection())
    setCursor()
}

function setCursor() {
    const cursor = document.querySelector('#note')
    cursor.focus()
}

// save function

function saveNote() {
    const contentNotes = document.querySelector('#note')
    const title = contentNotes.firstChild.textContent
    const body = convert_to_string()
    notesArray.push(createNote(title, body))
    createTitle()
    deleteNote()
}


function createNote(title,body) {
    return {title, body}
}

function convert_to_string() {
    let str = ''
    const divs = [...document.querySelectorAll('[contenteditable] > div')]
    for (const index of divs) {
        str += `${index.textContent}\n`
    }
    return str
}

// delete function

function deleteNote() {
    const content = document.querySelector('#note-area')
    content.remove()
}

//inputs side menu titles

function titleText() {
    let str = ''
    for (const title of notesArray) {
        let length_list = notesArray.length
        if (title === notesArray[length_list - 1]) {
            const list_title = document.createTextNode(title["title"])
            str += `${list_title.textContent}\n`
            return str
        } 
    }  
}

// create button to display title

function createTitle() {
    let str = ''
    const buttonElement = document.createElement('button')
    buttonElement.setAttribute('class', 'viewNotesBtn')
    buttonElement.setAttribute('onclick', 'createViewNote()')
    buttonElement.innerHTML = titleText()

    const listElement = document.createElement('li')
    listElement.appendChild(buttonElement)
    
    document.querySelector('#title').appendChild(listElement)
}



function viewNoteText() {
    
    let str = ''
    for (const body of notesArray) {
        let length_list = notesArray.length
        if (body === notesArray[length_list - 1]) {
            // const list_title = document.createTextNode(title["title"])
            str += body['body']
            return str
        } 
       }   
}


function deleteViewNotes() {
    const content = document.querySelector('.text_note')
    const trashIcon = document.querySelector('.fa-trash-alt')
    content.remove()
    trashIcon.remove()
}


function defineTextView() {
    html = `
    <div id="text_view">
        <button class="fas fa-trash-alt" onclick="deleteViewNotes()"></button>
    </div>
    `
    return html
}

function createViewNote() {
    const cleanUpButton = document.querySelector('#view-note')
    cleanUpButton.insertAdjacentHTML('beforeend', defineTextView())
    
    const divElement = document.createElement('div')
    divElement.innerHTML = viewNoteText()

    const textViewBox = document.createElement('div')
    textViewBox.setAttribute("class", "text_note")
    textViewBox.setAttribute("contenteditable", "true")
    textViewBox.innerText = titleText()
    textViewBox.appendChild(divElement)
 
    cleanUpButton.appendChild(textViewBox)
    
}

