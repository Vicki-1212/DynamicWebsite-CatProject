function switchOff(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off";
    document.getElementById("switchOff").style.backgroundColor="#B0B8AB";
    document.getElementById("switchOn").style.backgroundColor="#73E527";
}

function switchOn(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On";
    document.getElementById("switchOff").style.backgroundColor="#C70039";
    document.getElementById("switchOn").style.backgroundColor="#B0B8AB";
}