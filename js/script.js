
let pressedOpenAbout = true;
let pressedOpenSkills = true;
let pressedOpenProjects = true;
let pressedOpenSkillsInTheMaking = true;
let pressedOpenMessageForMe = true;
let pressedToggle = true;

const _ = elem => {										//create a function for getting elements from the DOM
	return document.querySelector(elem);
}
let aboutMe = _("#about-me");
let openAbout = _("#open-about");
let mySkills = _("#my-skills");
let openSkills = _("#open-skills");
let myProjects = _("#my-projects");
let openProjects = _("#open-projects");
let mySkillsInTheMaking = _("#my-skills-in-the-making");
let openSkillsInTheMaking = _("#open-skills-in-the-making");

let messageForMe = _("#message-for-me");
let openMessageForMe = _("#open-message-for-me");


//this creates a scroll indicator based on the height scrolled
window.addEventListener("scroll", ()=>{
	let amountScrolled = (window.pageYOffset /(document.body.scrollHeight - document.body.clientHeight)) * 100;
	_("#scroll-indicator").style.width = `${amountScrolled}%`;
})

//this creates the handshake effect upon page load
addEventListener("DOMContentLoaded", ()=>{
	_("#loader").style.display = "flex";
	setTimeout(()=>{
		_("#loader").style.display = "none";
		_("#handshake-effect-wrapper").style.display = "flex";
	},3000)									//3000ms
	setTimeout(()=>{
		_("#handshake-effect-wrapper").style.flexDirection = "column";
		_("#firstimage").style.display = "none";
		_("#secondimage").style.display = "none";
		_("#thirdimage").style.display = "block";
		_("#welcome-text-wrapper").style.display = "block";
	}, 4000);									//4000ms
	setTimeout(()=>{
		_("#handshake-effect-wrapper").style.display = "none";
		_("#outer-main-wrapper").style.display = "block";
	}, 6000);									//6000ms
	
})

//this is a helper function which opens each section of the site on button click
const openMenu = function(sectionInview, openingButton, displayStatus, newClass)
{
	sectionInview.style.display = displayStatus;
	openingButton.setAttribute("class", newClass);
}
				
openAbout.addEventListener("click", ()=> {
	if(pressedOpenAbout)
	{
		openMenu(aboutMe, openAbout, "block", "fa fa-minus open");
		pressedOpenAbout = false;
	}
	else
	{
		openMenu(aboutMe, openAbout, "none", "fa fa-plus open");
		pressedOpenAbout = true;
	}
	
});

openSkills.addEventListener("click", ()=> {
	if(pressedOpenSkills)
	{
		openMenu(mySkills, openSkills, "block", "fa fa-minus open");
		pressedOpenSkills = false;
	}
	else
	{
		openMenu(mySkills, openSkills, "none", "fa fa-plus open");
		pressedOpenSkills = true;
	}
	
});

openProjects.addEventListener("click", ()=> {
	if(pressedOpenProjects)
	{
		openMenu(myProjects, openProjects, "block", "fa fa-minus open");
		pressedOpenProjects = false;
	}
	else
	{
		openMenu(myProjects, openProjects, "none", "fa fa-plus open");
		pressedOpenProjects = true;
	}
	
});

openSkillsInTheMaking.addEventListener("click", ()=> {
	if(pressedOpenSkillsInTheMaking)
	{
		openMenu(mySkillsInTheMaking, openSkillsInTheMaking, "block", "fa fa-minus open");
		pressedOpenSkillsInTheMaking = false;
	}
	else
	{
		openMenu(mySkillsInTheMaking, openSkillsInTheMaking, "none", "fa fa-plus open");
		pressedOpenSkillsInTheMaking = true;
	}
	
});

openMessageForMe.addEventListener("click", ()=> {
	if(pressedOpenMessageForMe)
	{
		openMenu(messageForMe, openMessageForMe, "block", "fa fa-minus open");
		pressedOpenMessageForMe = false;
	}
	else
	{
		openMenu(messageForMe, openMessageForMe, "none", "fa fa-plus open");
		pressedOpenMessageForMe = true;
	}
	
});

const goToMenu = function(pressedTab){
	switch(pressedTab)
	{
		case "home":
			_("header").scrollIntoView();
			break;
		case "about":
			if(pressedOpenAbout)
			{
				openMenu(aboutMe, openAbout, "block", "fa fa-minus open");
				pressedOpenAbout = false;
			}
			_("#open-about").scrollIntoView();
			break;
		case "skills":
			if(pressedOpenSkills)
			{
				openMenu(mySkills, openSkills, "block", "fa fa-minus open");
				pressedOpenSkills = false;
			}
			_("#open-skills").scrollIntoView();
			break;
		case "projects":
			if(pressedOpenProjects)
			{
				openMenu(myProjects, openProjects, "block", "fa fa-minus open");
				pressedOpenProjects = false;
			}
			_("#open-projects").scrollIntoView();
			break;
		case "contact":
			_("footer").scrollIntoView();
	}
}

_("#footer-nav").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
});

_("#nav-larger-screen").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
});

_("#nav-smaller-screen").addEventListener("click", (event)=>{
	let pressed = event.target.getAttribute("class");
	goToMenu(pressed);
	_(".open-menu").setAttribute("class","fa fa-bars open-menu");
	_("#nav-smaller-screen").style.display = "none";
	pressedToggle = true;
});


//-------------This creates a rotaion effect on close and open menu toggler
_(".open-menu").addEventListener("click",() => {
	if(pressedToggle)
	{
		_(".open-menu").setAttribute("class","fa fa-close open-menu");
		_("#nav-smaller-screen").style.display = "block";
		_(".open-menu").style.transform = "rotate(180deg)";
		_(".open-menu").style.transition = "transform 0.7s ease";
		_("#nav-smaller-screen").style.animation = "appear-slowly 0.7s ease";
		pressedToggle = false;
	}
	else
	{
		_(".open-menu").setAttribute("class","fa fa-bars open-menu");
		_("#nav-smaller-screen").style.animation = "disappear-slowly 0.7s ease";
		setTimeout(()=>{
			_("#nav-smaller-screen").style.display = "none";
		},500);
		_(".open-menu").style.transform = "rotate(-180deg)";
		_(".open-menu").style.transition = "transform 0.7s ease";
		pressedToggle = true;
	}
	
});

