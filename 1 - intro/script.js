//document.ready
///This is to prevent any jQuery code from running before the document is finished loading.
/*other form

$(function(){

   // jQuery methods go here...

});
*/
$(document).ready(function(){
	//set a callback function on the event "click" of the button with id "btt1"
	//same as put a call to a function in the "onClick" event.
	
	$("#btt1").click(function(){
		//hide a specific element
        $("#prg1").hide();
    });
	
});