const transInput = document.getElementById("transInput")
const withdraw = document.getElementById("withdraw")
const deposit = document.getElementById("deposit")
const transfer = document.getElementById("transfer")
const password = document.getElementById("loginPassword")
const email = document.getElementById("loginEmail")
const logbtn = document.getElementById("login")
const amount = document.getElementById("transInput")
const fullname = document.getElementById("fullname")


const person = {
    name: "",
    balance: "",
    password: 0000,
    email: "js@gmail.com",

}

function depos() {
    let amnt = amount.value
    let total = Number(person.balance) + Number(amnt)
    person.balance = total
    document.getElementById("balanceDisplay").innerText = total + ".00"
    amount.value = ""
}
function withdra() {
    let cash = amount.value
    let total = Number(person.balance) - Number(cash)
    person.balance = total
    document.getElementById("balanceDisplay").innerText = total + ".00"
    amount.value = ""
}

function login() {
    let pass = parseInt(password.value)
    let Email = email.value
    // if (pass == person.password && Email == person.email) {
        document.querySelector(".cont1").style.display = "none"
        document.querySelector(".cont3").style.display = "block"
    // } else {
    //     alert("incorrect login details")
    // }
}

function signin() {
    document.querySelector(".cont1").style.display = "none"
    document.querySelector(".cont2").style.display = "block"
}
function submit() {
    document.querySelector(".cont1").style.display = "none"
    document.querySelector(".cont2").style.display = "none"
    document.querySelector(".cont3").style.display = "block"
}   