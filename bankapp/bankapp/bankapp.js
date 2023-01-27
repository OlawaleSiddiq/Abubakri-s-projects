const transInput = document.getElementById("transInput")
const person = {
    name: "",
    balance: "",
    password: 0000,
    email: "js@gmail.com",

}

function depos() {
    let amnt = transInput.value
    let total = Number(person.balance) + Number(amnt)
    person.balance = total
    document.getElementById("balanceDisplay").innerText = total + ".00"
    transInput.value = ""
    transInput.focus()
}

function withdra() {
    let cash = transInput.value
    let total = Number(person.balance) - Number(cash)
    person.balance = total
    document.getElementById("balanceDisplay").innerText = total + ".00"
    transInput.value = ""
    transInput.focus()

}

function login() {
    // var pass = document.getElementById('passwordinput').value;
    // var Email = document.getElementById('emailinput').value;
    // if () {
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