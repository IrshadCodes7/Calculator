function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, oprator) {
    let ans
    if (oprator == "plus") {
        ans = add(num1, num2)
    }
    else if (oprator == "minus") {
        ans = subtract(num1, num2)
    }
    else if (oprator == "mul") {
        ans = multiply(num1, num2)
    }
    else if (oprator == "div") {
        ans = divide(num1, num2)
    }
    else{
        ans=num1
    }
    return ans
}

const wordMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    plus:"+",
    minus:"-",
    mul:"*",
    div:"/"
};


const majorDisp = document.querySelector(".currInput")
const minorDisp = document.querySelector(".fullInput")

function majorDisplay(content) {
    majorDisp.textContent = content
}

function minorDisplay(content) {
    minorDisp.textContent = content
}

document.addEventListener("click", eventHandler)

let oprand1 = null, oprand2 = null, oprator = ""
let disp = "", eqn = "";

function eventHandler(event) {
    const classes = event.target.classList
    const key = classes[0]
    const keyType = classes[1]
    console.log(key, keyType)


    if (keyType === "num") {
        if (oprator === "") {
            oprand1 = oprand1 * 10 + wordMap[key]
            disp=String(oprand1)
            eqn+=wordMap[key]
        }
        else {
            oprand2 = oprand2 * 10 + wordMap[key]
            disp=String(oprand2)
            eqn+=wordMap[key]
        }
        console.log(oprand2)
    }
    else if (keyType === "oprator") {

        if (key === "clear") {
            oprand1 = null, oprand2 = null, oprator = ""
            disp=""
            eqn=""
        }
        else if (key === "equal") {
            oprand1 = operate(oprand1, oprand2, oprator)
            oprand2 = null
            oprator = ""
            disp=String(oprand1)
            oprand1=null
            eqn=""
        }
        else {
            if (oprator != ""){
                oprand1 = operate(oprand1, oprand2, oprator)
            }
            eqn+=wordMap[key]
            disp=String(oprand1)
            oprator = key
        }
        console.log(oprand1, oprand2, oprator)
        
        oprand2 = null
    }
    majorDisplay(disp)
    minorDisplay(eqn)
}





