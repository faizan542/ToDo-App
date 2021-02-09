var main = document.getElementById('mainList')
var inputValue = document.getElementById('inp')
function add(){
    var text = inputValue.value
    var finalText = document.createTextNode(text)

    var list = document.createElement('li')
    list.setAttribute('class', 'list')
    list.appendChild(finalText)
    main.appendChild(list)

//=======Create Delete Button
var btnDiv = document.createElement('div')
var btn = document.createElement('button')
btn.setAttribute('class', 'btn')
btn.setAttribute('onClick', 'deleteTodo(this)')
var btnText = 'Delete'
var finalbtnText = document.createTextNode(btnText)
btn.appendChild(finalbtnText)
btnDiv.appendChild(btn)
list.appendChild(btnDiv)

//=======Create Edit Button
var editBtn = document.createElement('button')
editBtn.setAttribute('class', 'btn')
editBtn.setAttribute('onClick', 'edit(this)')
var editbtnText = 'Edit'
var finaleditbtnText = document.createTextNode(editbtnText)
editBtn.appendChild(finaleditbtnText)
inputValue.value = ''
btnDiv.appendChild(editBtn)
list.appendChild(btnDiv)
}

function deleteTodo(e){
var li = e.parentNode.parentNode
li.remove()
// console.log(e.parentNode.parentNode)
}

function edit(e){
    var li = e.parentNode.parentNode
    var editText = prompt('Enter edit text')
    li.firstChild.nodeValue = editText
    // console.log(li)
}

function deleteAll(){
    main.innerHTML = ''
}