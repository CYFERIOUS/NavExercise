	//access main vars in the dom
	var mainContainer = document.getElementById("mainContainer");
	var careersMenu = document.getElementById("careerMenu");
	
	var mainMenu = document.getElementById("menu");
	var auxMenu = document.getElementById("auxMenu");
	var sideMenu = document.getElementById("sideMenu");
  
	var burguerMenu = document.getElementById("burguer");
	var curtain = document.getElementById("curtain");
	
var builderModule = {
	
 	// build main menu
	buildMainMenu: function (data) {
		for(var i = 0; i < data.items.length; i++) {
		var newdiv = document.createElement('div');
		var divIdName = 'my'+i+'Div';
		newdiv.setAttribute('id',divIdName);
		newdiv.setAttribute('class','menues');
		newdiv.innerHTML  = "<li>"+data.items[i].label+"</li>";
		mainMenu.appendChild(newdiv);

		newdiv.onmouseover = function(event){
				
			var necesary = event.currentTarget.id;
			if(necesary == "my2Div"){
				document.getElementById("careerMenu").style.display="block";
				document.getElementById("curtain").style.display="block";
			}
		}
		newdiv.onclick = function(event){
			window.open("http://www.dgflute.com","_blank");
		}
	}
  },
  // build secondary menu
	buildSecondaryMenu: function (data) {
		for(var i = 0; i < data.items[2].items.length; i++) {
			var careerDiv = document.createElement('div');
			careerDiv.setAttribute('class','menues');
			careerDiv.innerHTML  = "<li>"+data.items[2].items[i].label+"</li>";
			careersMenu.appendChild(careerDiv);
		}
  },
  // add events
  callUrl:function(){
  careersMenu.onclick = function(event){
		window.open("http://www.dgflute.com","_blank");
	}
  },
  curtainAppears:function(){
	curtain.onclick = function(event){
		document.getElementById("careerMenu").style.display="none";
		document.getElementById("curtain").style.display="none";	
	}  
  },
  
  toogle:function(element, className){ 	
	
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
		document.getElementById("curtain").style.display="block";
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		document.getElementById("curtain").style.display="none";
		
    }
	
	
		
		
    element.className = classString;
	return;
  },
  
  burguerMenuBehaviors:function(data){
	  
	  for(var i = 0; i < data.items.length; i++) {
		var sideDiv = document.createElement('div');
		sideDiv.setAttribute('class','menues');
		sideDiv.innerHTML  = "<li>"+data.items[i].label+"</li>";
		sideMenu.appendChild(sideDiv);
		sideDiv.style.visibility= 'visible';
	}
		burguerMenu.onclick = function(event){

			builderModule.toogle(document.getElementById('sideMenu'),"sideMenuActive");
			builderModule.toogle(document.getElementById('burguer'),"burguerActive");
		}  
  },
 
 
};

builderModule.callUrl();
builderModule.curtainAppears();
builderModule.burguerMenuBehaviors();
 

