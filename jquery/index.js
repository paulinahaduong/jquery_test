$(document).ready(function(){

var pixelMax = 300;

window.lol = function(num){
	var square = pixelMax/num;
	console.log("square " + square);
	console.log("num " + num);
	
	
	for(j = 0; j < num; j++){	
		$('<tr>').appendTo('.container');
	
	for (i = 0; i < num; i++){
		$('<td><div class="box"></div></td>').appendTo('.container');
	
	}

	}

	$("div.box").css('width', square + 'px');
	$("div.box").css('height', square + 'px');
	
	cssBox();
	buttonClear();

}

window.cssBox = function(){
	$( "div.box" )
	  .mouseenter(function() {
	  	$(this).css('background-color', 'red');
	  })
	  .mouseleave(function() {
	   
	  });
	  
}
	  
window.buttonClear = function(){

	$('#MyButton').click(function(){
      	$("div.box").css('background-color', 'white');
      	var squares = prompt("How many squares in each row?", "16");
      	$( "div.container" ).empty();
      	lol(squares);
      	

   	});


}
	






//$('.container').append('div');

});

$(function() {
	lol(16);
	
		
});
