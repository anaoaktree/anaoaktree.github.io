var lit=false;
//var light= document.getElementById('bulb');
var yellow="#f8d135";
var neutro ="white"
var smpants= document.getElementById("smartypants");



function lightSwitch(){
	if(lit){light.style.color= neutro; lit=false;}
	else{light.style.color = yellow ;lit=true;}
}

function showSmartyPants(){
	smpants.innerHTML="hello";
}





//=============== initialize
window.onload=function(){
	//light.addEventListener("click",lightSwitch);
	//smpants.addEventListener("mouseover", showSmartyPants);

}

