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

function visElemEvent(event,classname,vis){
	event.target.getElementsByClassName(classname)[0].style.visibility=vis;
}

function showDescription(event){
	visElemEvent(event,"project-title","hidden");
	visElemEvent(event,"project-description","visible");
}

function hideDescription(event){
	visElemEvent(event,"project-description","hidden");
	visElemEvent(event,"project-title","visible");
}





//=============== initialize
window.onload=function(){
	//Hides project descriptions
	var descr = document.getElementsByClassName("project-description");
	for (var i =0; i<descr.length;i++){
		descr[i].style.visibility="hidden";
	}
	var projects = document.getElementsByClassName("project");
	for (var i =0; i<projects.length;i++){
		projects[i].addEventListener("mouseenter", showDescription);
		projects[i].addEventListener("mouseleave", hideDescription);

	}

	//light.addEventListener("click",lightSwitch);
	//smpants.addEventListener("mouseover", showSmartyPants);

}

