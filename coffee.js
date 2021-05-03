(function(){
	"use strict";

	windows.onload = function(){

		var menubtn = document.getElementById("menubtn");
		var sidenav = document.getElementById("sideNav");
		var menu = document.getElementById("menu");

		sideNav.style.right = "-250px";

		menubtn.onclick = function(){
			if(sidenav.style.right == "-250px"){
				sidenav.style.right = "0";
				menu.src = "close.png";
			}
			else{
				sidenav.style.right = "-250px";
				menu.src = "menu.png";
			}
		}
	}

});