const getValue = document.querySelector('#words');

getValue.addEventListener('input',function(){
    var text = this.value;
    document.querySelector('.chars').innerHTML=text.length;
    let word = text.trim();                      
    let words = word.split(' ');
    let cleanWord = words.filter((value)=>{
        return value != ''
    })
    document.querySelector('.words').innerHTML=cleanWord.length;
});