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
var arrOperation = new Array()

calculator.addEventListener('keydown',evt =>{    
    evt.preventDefault() 
    if(!isNaN(evt.key)) {
        printOnScreen(evt.key)
        printInOperation(evt.key)
    }
    if(evt.key == '.') addPoint()
    if(isOperator(evt.key)) {         
        printInOperation(evt.key)
        addToArray(arrOperation,display.value)
        if(arrOperation.length > 3) solveOpArr()
        addToArray(arrOperation,evt.key)
        console.log(arrOperation)
        opActivated = true
    }
    if(evt.which == 13 || evt.keyCode == 13) convertoToArray(operation)
})
function isOperator(operator){
    if(operator == '') return false
    if('+-/*'.includes(operator))return true    
    return false
}
function printOnScreen(number){
    if(opActivated) {
        display.value = ''
        opActivated = false
    }
    if(display.value == '0') display.value = ''    
    display.value += number
    console.log(operation)
}
function printInOperation(value){    
    operation += value
    console.log(operation)
}
function addPoint(){
    if(pointActivated) {
        printOnScreen('')
        printInOperation('')
    }
    else if(display.value === '0') {
        printOnScreen('0.')
        printInOperation('0.')
    }
    else {
        printOnScreen('.')
        printInOperation('.')
    }
    pointActivated = true
}
function reset(){
    pointActivated = false
}
function convertoToArray(sentence){
    var numb = ''
    var sign = ''
    var array = new Array()
    for (let i = 0; i < sentence.length; i++) {
        if(isOperator(sentence[i])) {
            sign = sentence[i]
            array.push(numb)
            array.push(sign)
            numb = ''
        }
        numb+=sentence[i]
    }
    console.log(array)
}
function addToArray(array,val){
    array.push(val)
}

function artimeticalOperations(operationSign,opa,opb){
    var result = 0
    switch (operationSign) {
        case '+': result = Number(opa) + Number(opb)
            break;
        case '-': result = opa - opb            
            break;
        case '*': result = opa * opb            
            break;
        case '/': result = opa / opb
            break;
    }
    return result
}

function solveOpArr(){
    for (let i = 0; i < arrOperation.length; i++) {
        if('*/'.includes(arrOperation[i])){
            arrOperation[i] = artimeticalOperations(arrOperation[i],arrOperation[i-1],arrOperation[i+1]).toString()
            arrOperation.splice(i+1,1)
            arrOperation.splice(i-1,1)
            return arrOperation
        }
    }

    for (let i = 0; i < arrOperation.length; i++) {
        if('+-'.includes(arrOperation[i])){
            arrOperation[i] = artimeticalOperations(arrOperation[i],arrOperation[i-1],arrOperation[i+1]).toString()
            arrOperation.splice(i+1,1)
            arrOperation.splice(i-1,1) 
            i = 0           
        }
    }
    if('*/'.includes(arrOperation[arrOperation.length])){}
    arrOperation.push(arrOperation[arrOperation.length-2])

    return arrOperation            
}