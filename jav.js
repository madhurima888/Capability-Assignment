function tubelight(){
    let buttontxt = document.getElementById('onoffbutton');
    let bid =document.getElementById('lightid1');
    if(bid.src.match('bulbon')){
        buttontxt.value = "OFF";
        buttontxt.style.color = "red";
        document.body.style.backgroundColor = "lightyellow";
    }else{
        buttontxt.value = "ON";
        buttontxt.style.color = "green";
        document.body.style.backgroundColor = "lightblue";
    }

    let btext = document.getElementById('bulbdata');
    for(x=1; x<6; x++){
        let bid =document.getElementById('lightid'.concat(x));
        if(bid.src.match('bulbon')){
            bid.src="./images/bulboff.jpg";
            btext.innerHTML = "Light OFF";
            btext.style.color = "red";
        }else{
            bid.src="./images/bulbon.jpg";
            btext.innerHTML = "Light ON";
            btext.style.color = "green";
        }
    }

}