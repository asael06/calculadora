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
var opActivated = false
var pointActivated = false

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

n_0.addEventListener('click',() => {
    printOperation(n_0.innerHTML)
    printElementScreen(n_0.innerHTML)
})
n_1.addEventListener('click',() => {
    printOperation(n_1.innerHTML)
    printElementScreen(n_1.innerHTML)
})
n_2.addEventListener('click',() => {
    printOperation(n_2.innerHTML)
    printElementScreen(n_2.innerHTML)
})
n_3.addEventListener('click',() => {
    printOperation(n_3.innerHTML)
    printElementScreen(n_3.innerHTML)
})
n_4.addEventListener('click',() => {
    printOperation(n_4.innerHTML)
    printElementScreen(n_4.innerHTML)
})
n_5.addEventListener('click',() => {
    printOperation(n_5.innerHTML)
    printElementScreen(n_5.innerHTML)
})
n_6.addEventListener('click',() => {
    printOperation(n_6.innerHTML)
    printElementScreen(n_6.innerHTML)
})
n_7.addEventListener('click',() => {
    printOperation(n_7.innerHTML)
    printElementScreen(n_7.innerHTML)
})
n_8.addEventListener('click',() => {
    printOperation(n_8.innerHTML)
    printElementScreen(n_8.innerHTML)
})
n_9.addEventListener('click',() => {
    printOperation(n_9.innerHTML)
    printElementScreen(n_9.innerHTML)
})
multiply.addEventListener('click',() => {
    printOperation('*')
    operatorOrder('*')
    operatorSolve(ops)
    opActivated = true
})
divide.addEventListener('click',() => {
    printOperation('/')
    operatorOrder('/')
    operatorSolve(ops)
    opActivated = true
})
plus.addEventListener('click',() => {
    printOperation('+')
    operatorOrder('+')
    operatorSolve(ops)
    opActivated = true
})
less.addEventListener('click',() => {
    printOperation('-')
    operatorOrder('-')
    operatorSolve(ops)
    opActivated = true
})
point.addEventListener('click',() => {
    if(pointActivated){
        printOperation('')
        printElementScreen('')    
    }
    else{
        printOperation('.')
        printElementScreen('.')
    }
    pointActivated=true
})
equals.addEventListener('click',() => {solveOperation()})
letterC.addEventListener('click',() => {resteDisplay()})

function printOperation(value){     
    if((display.value == 0 && !isOperator(value))) display.value = ''   
    if(isOperator(value) && isOperator(operation.substring(operation.length-1)))printOperand(value)    
    else operation = operation + value        
    console.log(operation)
}

function printElementScreen(element){
    if(opActivated) {
        display.value = ''            
    }   
    
    display.value += element
    opActivated = false    
}

function printOperand(value){    
    operation = operation.substring(0,operation.length - 1) + value
}

function solveOperation(){
    if(display.value == 0) operation = '0'
    if(isOperator(operation.substring(operation.length - 1))){
        operation += lastNumber(operation)
        eq = true
        console.log(operation)
    }
    else {
        if(eq) { 
            operation = display.value +  operation.substring(operation.length - lastNumber(operation).length-1)
            console.log(operation)       
        }
    }
    eq = true        
    var resul = eval(operation)    
    display.value = resul
}

function resetValues(){
    operation = ''
    eq = false
    opActivated = false
    pointActivated = false    
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

function convertOperationToArray(sentence){
    var number = ''
    var sign
    var array = new Array()
    var cad = ''
    for(var i = 0;i < sentence.length;i++){
        if(isOperator(sentence[i])){
            sign = sentence[i]
            array.push(number)
            array.push(sign)
            number = ''
        }
        else {
            number += sentence[i]                        
        }
    }
    array.push(lastNumber(sentence))
    return array
}

function operations(opa,opb,op){
    result = 0
    switch (op) {
        case '/': result = opa / opb            
            break;
        case '*': result = opa * opb            
            break;
        case '+': result = Number(opa) + Number(opb) 
            break;
        case '-': result = opa - opb            
            break;        
    }
    return result
}

function solveOperationArr(arr){   
    var founded = false 
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='/' || arr[i]=='*') {
            arr[i] = operations(arr[i-1],arr[i+1],arr[i]).toString()
            display.value = arr[i]
            arr.splice(i+1,1)
            arr.splice(i-1,1)            
            return arr
        }
    }

    for(var i=0;i<arr.length;i++){
        if(arr[i]=='+' || arr[i]=='-') {            
            arr[i] = operations(arr[i-1],arr[i+1],arr[i]).toString()
            display.value = arr[i]
            arr.splice(i+1,1)
            arr.splice(i-1,1)
            i=0        
        }
    }    

    console.log(arr)
    return arr
}

var ops = ''
function operatorOrder(op){
    if(ops.length == 0 || ops.length == 1)  ops += operatorType(op)
    else if(ops.length == 2) ops = ops[1] + operatorType(op)
    console.log(ops)
    return ops
}

function operatorType(op){
    if('+-'.includes(op))return 'a'
    else if('*/'.includes(op))return 'b'
    return ''
}

function operatorSolve(operators){
    var arr = convertOperationToArray(operation.substring(0,operation.length-1))    
    if(operators != 'ab' && operators.length == 2) {
        operation = arrToString(solveOperationArr(arr)) + operation[operation.length-1]        
        console.log(operation)        
    }    
}

function arrToString(arr){
    var cad = ''
    for(var i=0;i<arr.length;i++) cad+=arr[i]
    return cad
}