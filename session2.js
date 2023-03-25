const cross = document.getElementById('xmark');
const dots = document.getElementById('dots');
const asideAction = document.getElementById('aside-action');
const userInput = document.getElementById('chat-board');
const sendBtn = document.getElementById('button');
const chatBoard = document.getElementById('chat-board');

function creatMessageElement(message, sender){

}

//hide the aside section

cross.addEventListener('click', ()=>{
    asideAction.style.visibility = 'hidden';
})

//visible the hide section

dots.addEventListener('click', function(){
        asideAction.style.visibility = 'visible';
        
})