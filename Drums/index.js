
function myFunction(e) {
    const sound = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`.key[data-key="${e}"]`);  
    if(!sound == null) return;
    if(key == null) return;
    
    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
   
}