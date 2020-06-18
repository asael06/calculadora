var letterC = document.getElementById('letter_c')
var plusLess = document.getElementById('plusless')
var percent = document.getElementById('percent')
var less = document.getElementById('less')
var n_1 = document.getElementById('n_1')
var n_2 = document.getElementById('n_2')
var n_3 = document.getElementById('n_3')
var n_4 = document.getElementById('n_4')
var n_5 = document.getElementById('n_5')
var n_6 = document.getElementById('n_6')
var n_7 = document.getElementById('n_7')
var n_8 = document.getElementById('n_8')
var n_9 = document.getElementById('n_9')
var n_0 = document.getElementById('n_0')
var multiply = document.getElementById('multiply')
var divide = document.getElementById('divide')
var plus = document.getElementById('plus')
var point = document.getElementById('point')
var equals = document.getElementById('equals')
var display = document.getElementById('dp-screen')
var calculator = document.getElementById('calculator')
var operation = ''
var eq = false

calculator.addEventListener('keydown',evt =>{    
    evt.preventDefault()    
    if(!isNaN(evt.key)) printOperation(evt.key)
    if(isOperator(evt.key)) printOperation(evt.key)
    if(evt.which == 13 || evt.keyCode == 13) solveOperation()
})

function isOperator(letter){
    letter.toString()   
    if(letter === '')return false
    if('+-*/'.includes(letter))return true    
    return false
}

n_0.addEventListener('click',() => {printOperation(n_0.innerHTML)})
n_1.addEventListener('click',() => {printOperation(n_1.innerHTML)})
n_2.addEventListener('click',() => {printOperation(n_2.innerHTML)})
n_3.addEventListener('click',() => {printOperation(n_3.innerHTML)})
n_4.addEventListener('click',() => {printOperation(n_4.innerHTML)})
n_5.addEventListener('click',() => {printOperation(n_5.innerHTML)})
n_6.addEventListener('click',() => {printOperation(n_6.innerHTML)})
n_7.addEventListener('click',() => {printOperation(n_7.innerHTML)})
n_8.addEventListener('click',() => {printOperation(n_8.innerHTML)})
n_9.addEventListener('click',() => {printOperation(n_9.innerHTML)})
multiply.addEventListener('click',() => {printOperation('*')})
divide.addEventListener('click',() => {printOperation('/')})
plus.addEventListener('click',() => {printOperation('+')})
point.addEventListener('click',() => {printOperation('.')})
equals.addEventListener('click',() => {solveOperation()})
letterC.addEventListener('click',() => {resteDisplay()})

function printOperation(value){   
    if(display.value == 0 && !isOperator(value)) display.value = ''
    if(isOperator(value) && isOperator(operation.substring(operation.length-1)))printOperand(value)
    else operation = display.value + value
    display.value = operation
    console.log(operation)
}

function printOperand(value){    
    operation = operation.substring(0,operation.length - 1) + value
}

function solveOperation(){
    if(display.value == 0)operation = '0'
    // else if(isOperator(operation.substring(operation.length - 1))){
    //     operation += lastNumber(operation)
    //     eq = true
    //     console.log(operation)
    // }
    if(eq) { operation = display.value +  operation.substring(operation.length - lastNumber(operation).length-1)
        console.log(operation)
        
    }
    eq = true        
    // var resul = eval(operation)    
    // display.value = resul
}

function resetValues(){
    operation = ''  
    eq = false  
}

function resteDisplay(){
    display.value = '0'
    resetValues();
}

function lastNumber(operationC){
    var cad = ''
    var cadf = ''
    var tamCad = operationC.length
    var lastCarater = operationC.substring(tamCad - 1)        
    if(isOperator(lastCarater)) {
        cad = operationC.substring(0,tamCad - 1)        
    }
    else cad = operationC
    var i = cad.length-1
    while(!isNaN(cad[i])) cadf = cad[i--] + cadf
    return cadf
}