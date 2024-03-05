
let range = document.querySelector('.input');
let keyShowHide = document.querySelector('.keyShowHide input')
let keyss = [];
let music = new Audio("tunes/a.mp3");


let getValue = ((e)=>{
    music.volume = e.target.value;
})
range.addEventListener('input',getValue)



let keyShow = ()=>{
    keys.forEach(key=>key.classList.toggle("hide"))
}
keyShowHide.addEventListener('input',keyShow)




function playMucsic(key) { 
    music.src = `tunes/${key}.mp3`;
    music.currentTime=0;
    music.play();
    let clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
}


let keys = document.querySelectorAll('.key');
keys.forEach(key =>{
    keyss.push(key.dataset.key);
   key.addEventListener('click',()=>playMucsic(key.dataset.key))
})



const pressedKey = (event)=>{
   if (keyss.includes(event.key)) playMucsic(event.key)
}
document.addEventListener("keydown",pressedKey)


