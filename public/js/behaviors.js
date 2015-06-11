	//access main vars in the dom
	var mainContainer = document.getElementById("mainContainer");
	var careersMenu = document.getElementById("careerMenu");
	
	var mainMenu = document.getElementById("menu");
	var sideMenu = document.getElementById("sideMenu");
  
	var burguerMenu = document.getElementById("burguer");
	var curtain = document.getElementById("curtain");
	
var builderModule = {
	
 	// build main menu
	buildMainMenu: function (data) {
		for(var i = 0; i < data.items.length; i++) {
		console.log("este que pasa"+data.items[i].label); 
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
			console.log("carreras"+data.items[2].items[i].label);
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
  
  burguerMenuBehaviors:function(){
		burguerMenu.onclick = function(event){
		sideMenu.appendChild(mainMenu);
		var i, tags = document.getElementById("sideMenu").getElementsByTagName("*"), total = tags.length;
		for ( i = 0; i < total; i++ ) {
  			tags[i].style.visibility= 'visible';
		}
		document.getElementById("sideMenu").style.display="block";
		document.getElementById("burguer").style.backgroundImage= "url(../images/toggle-close.svg)";
		document.getElementById("curtain").style.display="block";
	}  
  },
 
 consoleLogs:function(){
	console.log(arr.items[0].label);
	console.log("long is" + arr.items.length);	 
 },
};

builderModule.callUrl();
builderModule.curtainAppears();
builderModule.burguerMenuBehaviors();
 

