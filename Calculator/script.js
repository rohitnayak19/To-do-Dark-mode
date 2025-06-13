const display = document.querySelector('.display');

function clearDisplay(){
    display.innerText = '0'
}

function append(value){
    if(display.innerText === '0') display.innerText =''
    display.innerText += value
}

function deleteLast(){
    if(display.innerText.length>1){
        display.innerText = display.innerText.slice(0,-1)
    }else{
        display.innerText ='0'
    }
}

function calculate(){
    try{
        const expression = display.innerText.replace('x' ,'*').replace('÷','/')
        const result = eval(expression)
        display.innerText = result
    }
     catch{
        display.innerText = 'Error'
     }
}
