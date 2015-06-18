	//access main vars in the dom
	var mainContainer = document.getElementById("mainContainer");
	var careersMenu = document.getElementById("careerMenu");
	
	var mainMenu = document.getElementById("menu");
	var auxMenu = document.getElementById("auxMenu");
	var sideMenu = document.getElementById("sideMenu");
	var falseMenu = document.getElementById("falseMenu");
  
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
				careersMenu.style.display="block";
				curtain.style.display="block";
			}else{
				careersMenu.style.display="none";
				curtain.style.display="none";
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
  //curtain behavior
  curtainAppears:function(){
	curtain.onclick = function(event){
		careersMenu.style.display="none";
		curtain.style.display="none";	
	}  
  },
  //mobile menu toogle
  toogle:function(element, className){ 	
	
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
		curtain.style.display="block";
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		curtain.style.display="none";
    }
	console.log(classString);
    element.className = classString;
  },
  //mobile menu creation
  burguerMenuBehaviors:function(data){
	  	
		var copyDiv = document.createElement('div');
		copyDiv.setAttribute('class','copy');
		copyDiv.innerHTML = "© 2014 Huge. All Rights Reserved.";
		
		for(var i = 0; i < data.items.length; i++) {
			var sideDiv = document.createElement('div');
			var sideIdName = 'my'+i+'sideDiv';
			sideDiv.setAttribute('id',sideIdName);
			sideDiv.setAttribute('class','menues');
			sideDiv.innerHTML  = "<li>"+data.items[i].label+"</li>";
			sideMenu.appendChild(sideDiv);
			sideDiv.style.visibility= 'visible';
			sideDiv.onclick = function(event){
				var subitems = event.currentTarget.id;
				if(subitems == "my2sideDiv"){
					for(var i = 3; i < data.items.length; i++) {
						builderModule.toogle(document.getElementById('my'+i+'sideDiv'),"belowSubCareer");
					}
					for(var i = 0; i < data.items[2].items.length; i++) {
						builderModule.toogle(document.getElementById('my'+i+'carDiv'),"showSubCareer");
					}
				}
			}
		}
		
		for(var i = 0; i < data.items[2].items.length; i++) {
			var carDivSide = document.createElement('div');
			var carDivName = 'my'+i+'carDiv';
			carDivSide.setAttribute('id',carDivName);
			carDivSide.setAttribute('class','subCareer');
			carDivSide.innerHTML  = "<li>"+data.items[2].items[i].label+"</li>";
			sideDiv.appendChild(carDivSide);
			carDivSide.onclick = function(event){
				window.open("http://www.dgflute.com","_blank");
			}
		}
		
		burguerMenu.onclick = function(event){
			builderModule.toogle(sideMenu,"sideMenuActive");
			builderModule.toogle(burguerMenu,"burguerActive");
			builderModule.toogle(falseMenu,"gobackMenu");
		} 
		 
		sideDiv.appendChild(copyDiv);
  },
};

builderModule.callUrl();
builderModule.curtainAppears();
builderModule.burguerMenuBehaviors();
 

