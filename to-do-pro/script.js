let currentUserTodoList
let currentUser = []
let fullname = document.getElementById('fullname')
let greetings = document.getElementById('greetings')
let email = document.getElementById('email')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('passwordConfirmation')
let gender = document.querySelector('input[type="radio"]:checked')
let todoItem = document.getElementById('todoItem')
let date = document.getElementById('date')
let description = document.getElementById('description')
let category = document.getElementById('category')
let ul = document.querySelector('ul')
let logEmail = document.getElementById('logEmail')
let logPassword = document.getElementById('logPassword')
let loginButton = document.getElementById('loginButton')
let addTodoButton = document.getElementById('addtodo')
let registerbutton = document.getElementById('register')
let fullnameVText = document.querySelector('.fullname.validation')
let emailVText = document.querySelector('.email.validation')
let passwordVText = document.querySelector('.password.validation')
let passwordVerificationText = document.querySelector('.confirm.validation')
let loginSpan = document.querySelector('.login-span')
let registerPage = document.querySelector('.signup-page')
let loginPage = document.querySelector('.login-page')
let registerSpan = document.querySelector('.registerSpan')
let todocontainer = document.querySelector('.todocontainer')
let dlt = document.getElementsByClassName('del')
let more = document.getElementsByClassName('more')
let logout = document.querySelector('.logout')
let usersArray = [];
let newUser = {};
let todoObject = {}

window.onload = () => {
    if (localStorage.usersarray) {
        usersArray = JSON.parse(localStorage.getItem(`usersarray`))
    }
}

//respponsible for the registration process
function registerUser() {
    newUser = {
        fullname: fullname.value.toUpperCase(),
        email: email.value.toUpperCase(),
        password: password.value.toUpperCase(),
        passwordConfirmation: passwordConfirmation.value.toUpperCase(),
        gender: gender.value.toUpperCase(),
        todoArray: [],
    }

    if (fullname.value.length < 3) {
        fullnameVText.textContent = "name's too short"
        fullnameVText.style.color = 'red'
        return
    } else {
        fullnameVText.textContent = 'Good'
        fullnameVText.style.color = 'Green'
    }

    if (email.value.includes('@') === false || email.value.includes('.com') === false) {
        emailVText.textContent = "Invalid email address"
        emailVText.style.color = 'red'
        return
    } else {
        emailVText.textContent = 'Good'
        emailVText.style.color = 'Green'
    }

    if (password.value.length < 4) {
        passwordVText.textContent = "password's too short"
        passwordVText.style.color = 'red'
        return
    } else {
        passwordVText.textContent = 'Good'
        passwordVText.style.color = 'Green'
    }

    if (passwordConfirmation.value !== password.value || passwordConfirmation.value === "") {
        passwordVerificationText.textContent = 'unmatched password'
        passwordVerificationText.style.color = 'red'
        return
    } else {
        passwordVerificationText.textContent = 'Good'
        passwordVerificationText.style.color = 'Green'
    }

    usersArray.push(newUser)
    localStorage.setItem(`usersarray`, JSON.stringify(usersArray));

    function changePage() {
        loginPage.style.display = 'flex'
        registerPage.style.display = 'none'
        fullname.value = "";
        email.value = "";
        password.value = "";
        passwordConfirmation.value = "";

        fullnameVText.textContent = ""
        passwordVerificationText.textContent = ""
        passwordVText.textContent = ""
        emailVText.textContent = ""
    }
    setTimeout(changePage, 500)
}

// login details check
function confirmLogin() {
    for (let i = 0; i < usersArray.length; i++) {
        currentUser = usersArray[i]
        currentUserTodoList = usersArray[i].todoArray
        if (usersArray[i].password === logPassword.value.toUpperCase() && usersArray[i].email === logEmail.value.toUpperCase()) {
            return true
        }
    }
}


function displayCurrentTodoItems() {
    for (let j = 0; j < currentUserTodoList.length; j++) {
        if (currentUserTodoList[j].todoChecked === 'checked') {
            ul.innerHTML += `<li class ='checked' data-id="${currentUserTodoList[j].todoID}">${currentUserTodoList[j].todoTitle}<span class='del'>X</span><span class="more">...</span></li>`
        }
        else {
            ul.innerHTML += `<li data-id="${currentUserTodoList[j].todoID}">${currentUserTodoList[j].todoTitle}<span class='del' >X</span><span class="more">...</span></li>`
        }
    }
    deleting()
}

// localStorage.clear()
function deleting() {
    for (let k = 0; k < dlt.length; k++) {
        dlt[k].addEventListener('click', function () {
            let id = this.parentElement.getAttribute('data-id')
            this.parentElement.remove()
            console.log(id)
            for (let s = 0; s < currentUser.todoArray.length; s++) {
                if (currentUser.todoArray[s].todoID === id) {
                    currentUser.todoArray = currentUser.todoArray.slice(0, s).concat(currentUser.todoArray.slice(s + 1))
                    console.table(currentUser.todoArray)
                    localStorage.setItem(`usersarray`, JSON.stringify(usersArray));
                }
            }
        })
    }
}

function generateId() {
    let id = String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10))
    return id
}

// the login confirmation
function login() {
    if (confirmLogin()) {
        logPassword.value = ""
        loginPage.style.display = 'none'
        todocontainer.style.display = 'flex'
        greetings.textContent = `WELLCOME ${currentUser.fullname}`
        displayCurrentTodoItems()
    } else {
        alert('invalid login details')
    }
}

// localStorage.clear()
// responsible for adding more todo to the todo list
function addTodo() {
    if (todoItem.value === "") {
        alert('To-do title can not be blank')
        return
    }

    todoObject = {
        todoTitle: todoItem.value,
        todoDate: date.value,
        todoDescription: description.value,
        todoCategory: category.value,
        todoID: generateId(),
        todoChecked: null
    }

    currentUserTodoList.push(todoObject)

    if (todoObject.todoTitle.length > 30) {
        todoObject.todoTitle = todoObject.todoTitle.slice(0, 30) + '.......'
    }
    ul.innerHTML += `<li  data-id="${todoObject.todoID}">${todoObject.todoTitle}<span class='del'>X</span><span class="more">...</span></li>`
    deleting()
 
    localStorage.setItem(`usersarray`, JSON.stringify(usersArray))

    // clear the input boxes after saving
    todoItem.value = ""
    date.value = ""
    description.value = ""
    category.value = ""
}


addTodoButton.addEventListener('click', addTodo)
loginButton.addEventListener('click', login)
registerbutton.addEventListener('click', registerUser)
logout.addEventListener('click', () => {
    todocontainer.style.display = "none"
    loginPage.style.display = "flex";
    ul.innerHTML = ""
})

// responsible for login confirmation
loginSpan.addEventListener('click', () => {
    loginPage.style.display = 'flex'
    registerPage.style.display = 'none'
})

//responsible for registration process
registerSpan.addEventListener('click', () => {
    loginPage.style.display = 'none'
    registerPage.style.display = 'flex'
})

// responsible for marking the finished todo tasks
ul.addEventListener('click', (e) => {
    let target = e.target;
    let targetID = target.getAttribute('data-id')
    if (target.tagName === 'LI' && target.classList.contains('checked')) {
        target.classList.remove('checked')
    } else if (target.tagName === 'LI' && target.classList.contains('checked') === false) {
        target.classList.add('checked')
    }
    checker(targetID)
    localStorage.setItem(`usersarray`, JSON.stringify(usersArray));
})

function checker(targetID) {
    for (let i = 0; i < currentUserTodoList.length; i++) {
        if (currentUserTodoList[i].todoID === targetID) {
            // console.log(currentUserTodoList[i].todoChecked)
            if (currentUserTodoList[i].todoChecked === null) {
                currentUserTodoList[i].todoChecked = 'checked'
            } else {
                currentUserTodoList[i].todoChecked = null;
            }
        }
    }
}