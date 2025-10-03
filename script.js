function add(num1,num2){
    return num1+num2
}
function subtract(num1,num2){
    return num1-num2
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    return num1/num2
}

function operate(num1,num2,oprator){
    let ans
    if(oprator=="plus"){
        ans=add(num1,num2)
    }
    if(oprator=="minus"){
        ans=subtract(num1,num2)
    }
    if(oprator=="mul"){
        ans=multiply(num1,num2)
    }
    if(oprator=="div"){
        ans=divide(num1,num2)
    }
    return ans
}

const majorDisp=document.querySelector(".currInput")
const minorDisp=document.querySelector(".fullInput")

function majorDisplay(content){
   majorDisp.textContent=content
}

function minorDisplay(content){
    minorDis.textContent=content
}




