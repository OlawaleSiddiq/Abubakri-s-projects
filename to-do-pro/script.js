let currentUserTodoList
let currentUser = []
let fullname = document.getElementById('fullname')
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
        fullnameVText.textContent = 'invalid'
        fullnameVText.style.color = 'red'
        return
    } else {
        fullnameVText.textContent = 'Good'
        fullnameVText.style.color = 'Green'
    }

    if (password.value.length < 4) {
        passwordVText.textContent = "Bad"
        passwordVText.style.color = 'red'
        return
    } else {
        passwordVText.textContent = 'Good'
        passwordVText.style.color = 'Green'
    }

    if (passwordConfirmation.value !== password.value || passwordConfirmation.value === "") {
        passwordVerificationText.textContent = 'invalid'
        passwordVerificationText.style.color = 'red'
        return
    } else {
        passwordVerificationText.textContent = 'Good'
        passwordVerificationText.style.color = 'Green'
    }

    usersArray.push(newUser)
    localStorage.setItem(`usersarray`, JSON.stringify(usersArray));
    usersArray = JSON.parse(localStorage.getItem(`usersarray`))
    loginPage.style.display = 'flex'
    registerPage.style.display = 'none'

    fullname.value = "";
    email.value = "";
    password.value = "";
    passwordConfirmation.value = "";

    fullnameVText.textContent = ""
    passwordVerificationText.textContent = ""
    passwordVText.textContent = ""


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

// the login confirmation
function login() {
    if (confirmLogin()) {
        logPassword.value = ""
        loginPage.style.display = 'none'
        todocontainer.style.display = 'flex'

        for (let j = 0; j < currentUserTodoList.length; j++) {
            ul.innerHTML += `<li>${currentUserTodoList[j].todoTitle}<span class='del'>X</span><span class="more">....</span></li>`
            for (let k = 0; k < dlt.length; k++) {
                dlt[k].addEventListener('click', function () {
                    this.parentElement.remove()
                })
            }
        }
    } else {
        alert('invalid login details')
    }
}

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
        todoID: 0
    }

    ul.innerHTML += `<li>${todoObject.todoTitle}<span class='del'>X</span><span class="more">....</span></li>`
    currentUserTodoList.push(todoObject)
    localStorage.setItem(`usersarray`, JSON.stringify(usersArray))

    for (let i = 0; i < dlt.length; i++) {
        dlt[i].addEventListener('click', function () {
            this.parentElement.remove()
            // currentUserTodoList.splice(currentUserTodoList[i], 1)
        })
    }
    // clear the input boxes after saving
    todoItem.value = ""
    date.value = ""
    description.value = ""
    category.value = ""
    console.clear()
    console.table(currentUserTodoList)

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
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
})