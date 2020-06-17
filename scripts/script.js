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

calculator.addEventListener('keypress',evt =>{
    var cad = ''
    evt.preventDefault()    
    if(!isNaN(evt.key))display.value = parseFloat(display.value + evt.key)
    if(isOperator(evt.key))display.value += evt.key
})

function isOperator(letter){
    if(letter.indexOf('+-*/'))return true
    else false
}

n_0.addEventListener('click',() => {print(n_0.innerHTML)})
n_1.addEventListener('click',() => {print(n_1.innerHTML)})
n_2.addEventListener('click',() => {print(n_2.innerHTML)})
n_3.addEventListener('click',() => {print(n_3.innerHTML)})
n_4.addEventListener('click',() => {print(n_4.innerHTML)})
n_5.addEventListener('click',() => {print(n_5.innerHTML)})
n_6.addEventListener('click',() => {print(n_6.innerHTML)})
n_7.addEventListener('click',() => {print(n_7.innerHTML)})
n_8.addEventListener('click',() => {print(n_8.innerHTML)})
n_9.addEventListener('click',() => {print(n_9.innerHTML)})

function print(cad){
    display.value = parseFloat(display.value + cad)
}



