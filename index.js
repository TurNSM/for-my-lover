const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btnPlus = document.querySelector('#buttonPlus')
const btnMin = document.querySelector('#buttonMinus')
const btnY = document.querySelector('#buttonY')
const btnD = document.querySelector('#buttonD')
const btnRes = document.getElementById('buttonResult')
const result = document.querySelector('#result')
const sicret = document.querySelector('#sicret')
const url = document.querySelector('#url')

// let action = '+'

btnPlus.onclick = function (){
    action = '+'
}
btnMin.onclick = function (){
    action = '-'
}
btnY.onclick = function (){
    action = '*'
}
btnD.onclick = function (){
    action = '/'
}

function evention (inp1, inp2, actionSymbol) {
    num1 = +inp1.value
    num2 = +inp2.value
    if(actionSymbol == '+'){
        return num1 + num2
    }if(actionSymbol == '-'){
        return num1 - num2
    }if(actionSymbol == '*'){
        return num1 * num2
    }if(actionSymbol == '/'){
       return  num1 / num2
    }
}
btnRes.onclick = function(){
    result.textContent = evention(input1, input2, action)
}
sicret.onclick = function(){
    result.textContent = 'Хорошего тебе настроения, Настасья :)'
    document.getElementById('cat').src = 'https://memi.klev.club/uploads/posts/2024-12/memi-klev-club-cgbf-p-memi-kotik-schastlivii-19.jpg'
    
}