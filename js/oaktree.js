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

function showDescription(event){
	event.target.getElementsByClassName("project-title")[0].classList.add("offscreen");
	event.target.getElementsByClassName("project-description")[0].classList.remove("offscreen");
}

function hideDescription(event){
	event.target.getElementsByClassName("project-description")[0].classList.add("offscreen");
	event.target.getElementsByClassName("project-title")[0].classList.remove("offscreen");
	
}


//=============== initialize
window.onload=function(){
	//Hides project descriptions
	
	var descr = document.getElementsByClassName("project-description");
	for (var i =0; i<descr.length;i++){
		descr[i].classList.add("offscreen");
	}
	/*
	var projects = document.getElementsByClassName("project");
	for (var i =0; i<projects.length;i++){
		projects[i].addEventListener("mouseenter", showDescription);
		projects[i].addEventListener("mouseleave", hideDescription);

	}
	*/
	//light.addEventListener("click",lightSwitch);
	//smpants.addEventListener("mouseover", showSmartyPants);

}

