const transInput = document.getElementById("transInput")
const person = {
    name: "",
    balance: 0.00,
    password: 0000,
    email: "js@gmail.com",
}

function depos() {
    let amnt = Number(transInput.value)
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

document.querySelector('.login').onclick = function () {
    document.querySelector(".cont1").style.display = "none"
    document.querySelector(".cont3").style.display = "block"
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