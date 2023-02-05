let fullName = document.getElementById('fullname')
let age = document.getElementById('age')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let gender = document.getElementById('gender')
let password = document.getElementById('password')
let subBtn = document.getElementById('submitBtn')
let containerOne = document.getElementById('containerOne')
let containerTwo = document.getElementById('containerTwo')
let containerThree = document.getElementById('containerThree')
let transInput = document.getElementById("transactionInput")
let currentUser;
let total
let users = []
window.onload = () => {
    if (localStorage.record) {
        users = JSON.parse(localStorage.getItem(`record`))
    }
}

function login() {

    let logemail = document.getElementById('emailInput').value.toUpperCase()
    let logpassword = document.getElementById('passwordInput').value.toUpperCase()
    for (let i = 0; i < users.length; i++) {
        if (logemail !== users[i].uEmail || logpassword !== users[i].uPassword) {
            alert("incorrect login details, please retry and if you are yet to register, click on the 'signup' below");
            return
        } else {
            currentUser = users[i]
            containerOne.style.display = "none"
            containerTwo.style.display = "none"
            containerThree.style.display = "block"
            document.getElementById("custName").innerText = "Wellcome! Dear" + ' ' + users[i].uName + ','
            transInput.focus()
            alert('login successful')
        }
    }
}


function signup() {
    containerOne.style.display = "none"
    containerThree.style.display = "none"
    containerTwo.style.display = "block"
    fullName.focus()
}


function register() {

    var newPerson = {
        uName: fullName.value.toUpperCase(),
        uAge: age.value,
        uEmail: email.value.toUpperCase(),
        uPhone: phone.value,
        uPassword: password.value.toUpperCase(),
        uGender: gender.value.toUpperCase(),
        uBalance: 00,
    }

    if (newPerson.uName === "") {
        alert("please input your name")
        return
    }

    if (newPerson.uAge > 100) {
        alert("sorry!, we don't accept people above 100 years of age")
        return
    }
    if (newPerson.uAge < 18) {
        alert("You must be 18 years of age or above")
        return
    }

    if (newPerson.uPhone.lenght < 11) {
        alert("Your phone number length must not be less than 11 digits")
        return
    }
    if (newPerson.uPassword.length < 8) {
        alert("password must be minimum of 8 alphanumeric characters")
        return
    }

    users.unshift(newPerson)
    console.log(users)
    localStorage.setItem(`record`, JSON.stringify(users))
    containerOne.style.display = "block"
    containerTwo.style.display = "none"
    containerThree.style.display = "none"

}
function deposit() {
    if (transInput.value === "") return
    total = currentUser.uBalance + Number(transInput.value)
    currentUser.uBalance = total
    document.getElementById("balanceDisplay").innerText = total + ".00"
    transInput.value = ""
    transInput.focus()
}


function withdraw() {
    if (transInput.value === "") return
    total = currentUser.uBalance - Number(transInput.value)
    currentUser.uBalance = total
    document.getElementById("balanceDisplay").innerText = '#' + total + ".00"
    transInput.value = ""
    transInput.focus()
}

function transfer() {
    let div = document.createElement('div');
    div.className = 'transpage';
    let accountInput = document.createElement('input');
    let accountLabel = document.createElement('label')
    accountInput.classList = 'inputs'
    accountInput.type = 'number'
    accountLabel.innerText = 'Enter account'
    accountLabel.appendChild(accountInput)
    let amountInput = document.createElement('input');
    amountInput.id = 'transferInput'
    let amountLabel = document.createElement('label')
    amountLabel.innerText = 'Enter amount'
    amountLabel.appendChild(amountInput)
    amountInput.classList = 'inputs'
    amountInput.type = 'number'
    let p = document.createElement('p');
    let button = document.createElement('button');
    button.id = 'sendbtn'
    button.innerText = 'Transfer'
    button.classList = 'submitbtn'
    let text = document.createTextNode("Please enter beneficiary's account number")
    p.appendChild(text)
    div.appendChild(p)
    div.appendChild(accountLabel)
    div.appendChild(amountLabel)
    div.appendChild(button)
    document.body.appendChild(div)

    let sendbtn = document.getElementById('sendbtn')
    sendbtn.onclick = function () {
        let gift = document.getElementById('transferInput')
        if (gift.value === ""){
            alert('input amount to transfer')
            return
        }
        total = currentUser.uBalance - Number(gift.value)
        currentUser.uBalance = total
        document.getElementById("balanceDisplay").innerText = total + ".00"
        transInput.focus()
        this.parentElement.remove()
    }
}