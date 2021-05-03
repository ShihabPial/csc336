(function(){
	"use strict";

	windows.onload = function(){

		const btn = document.getElementById("button");

		const tempLog = document.getElementById("temperature");
		const coffeeLog = document.getElementById("Coffee/Espresso");
		const sizeLog = document.getElementById("Size");

		btn.addEventListener('click', printValue);

		function printValue() {
  			Document.write(tempLog.value);
  			Document.write(coffeeLog.value);
  			Document.write(sizeLog.value);
		}
	}

});