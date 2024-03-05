const input = document.getElementById('input1');
const buttons = document.querySelectorAll('button');
let str='';
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            str=input.value;
            input.value = eval(str);
        }
        else if (e.target.innerHTML=='AC') {
            str='';
            input.value=str;
        }
        else if (e.target.innerHTML=='DEL'){
            str=input.value;
            input.value=str.substring(0,str.length-1);
        }
        else{
        str+=e.target.innerHTML
        input.value=str;
        }
    })
})