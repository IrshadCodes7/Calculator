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
    if(oprator=="plus"){
        add(num1,num2)
    }
    if(oprator=="minus"){
        subtract(num1,num2)
    }
    if(oprator=="mul"){
        multiply(num1,num2)
    }
    if(oprator=="div"){
        divide(num1,num2)
    }
}

