'use strict'

//alert("hey");
var i=true;
$("#firstdiv").on( "click",function(){
	if(i){
		//console.log($(this).css.backgroundColor);
//	if($(this).css.("background-color")==="blue")
	
		$(this).css("background-color", "black" );
		
	}else
	{
		$(this).css("background-color","blue");
		
	}
	i=!i;
/*	if(i){
    	document.getElementById("firstdiv").backgroundColor="green";
    	i=false;
    }
    else{
    	document.getElementById("firstdiv").backgroundColor="black";
    	i=true;
    }*/
    //alert("yoo");
} );