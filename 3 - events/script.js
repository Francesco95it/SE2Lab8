//document.ready
///This is to prevent any jQuery code from running before the document is finished loading.
/*other form

$(function(){

   // jQuery methods go here...

});
*/

$(document).ready(function(){
	//set a callback functoion on the event "click" of the button wirth id "Button"
	//same as put a call to a function in the "onClick" event. (this is suugested then putting in line event listeners)
    $("#btt1").click(function(){
		//hide all <p> elements
        $("p").hide();
    });
	
	
	$("#prg1").mouseenter(function(){
    	alert("You entered p1!");
	});
	
	$("#prg2").hover(
		function(){
    		alert("You entered p1!");
		},
		function(){
    		alert("Bye! You now leave p1!");
		}
	);
	
	//multiple events
	$("#prg3").on({
		mouseenter: function(){
			$(this).css("background-color", "lightgray");
		}, 
		mouseleave: function(){
			$(this).css("background-color", "lightblue");
		}, 
		click: function(){
			$(this).css("background-color", "yellow");
		} 
	});	
});

/*JQuery events	
Mouse Events
-click	
-dblclick	
-mouseenter	
-mouseleave	 	
-hover : mouseenter() + mouseleave() : 2 parameters

Keyboard Events	
-keypress	
-keydown	
-keyup	


Form Events	
-submit	
-change	
-focus	The function is executed when the form field gets focus
-blur	is executed when the form field loses focus

Document/Window Events
-load
-resize
-scroll
-unload

Multiple events
-on

**http://www.w3schools.com/jquery/jquery_events.asp
*/