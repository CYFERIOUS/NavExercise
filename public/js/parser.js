var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8080/hello";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
		builderModule.buildMainMenu(myArr);
		builderModule.buildSecondaryMenu(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

	
