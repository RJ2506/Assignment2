const head = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const footer = document.querySelector('.footer')
const buttons = document.querySelector('.buttons')
const switch_bar = document.querySelector('.dark')
const side_button = document.querySelector('.side_button')
const textinput = document.querySelector('.textinput')
const textarea = document.querySelector('.textarea')
const save = document.querySelector('.save')
const deleted = document.querySelector('.delete')
const button = document.createElement( 'button')

textinput.classList.remove('textinput')
textarea.classList.add('textarea')

function note() {
    textinput.classList.toggle('textinput')
    const add = document.getElementById("add");
var i = 0;
const div = document.getElementById("hobby");
add.addEventListener("click", function(){
  i++;
  const edit = document.createElement('input');
  edit.id = i;
  edit.placeholder = "More hobbies";
  
  //Also I need add remove button for each input, which removes its input
  div.appendChild(edit);
  
  var button = document. createElement("button");
  button. innerHTML = "X";
  button.id=i;
  button.onclick = function() { 
         div.removeChild(document.getElementById(button.id));
         div.removeChild(button)
 }
  div.appendChild(button);
  
 
});
}

function theme() {
    head.classList.toggle('toggle-dark')
    sidebar.classList.toggle('toggle-dark')
    content.classList.toggle('toggle-dark')
    footer.classList.toggle('toggle-dark')
    side_button.classList.toggle('toggle-dark')
    switch_bar.classList.toggle('toggle_dark_button')
    textinput.classList.toggle('textinput')
    textinput.classList.toggle('toggle_textinput')
    save.classList.toggle('save')
    save.classList.toggle('toggle-save')
    deleted.classList.toggle('delete')
    deleted.classList.toggle('toggle-delete')
}


switch_bar.addEventListener('click', theme, false)
textarea.addEventListener('click', note, false)
