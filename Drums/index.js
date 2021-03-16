window.addEventListener("keydown",(e)=>
{
    console.log(e);
    var audio=document.querySelector(' audio[data-key="${e.keyCode}"]')
   var key=document.querySelector(` .key[data-key="${e.keyCode}"]`)
   console.log(audio) 
   if(audio){
    audio.play()
    audio.currentTime=0
    key.classList.add("playing")
    }
    return
})