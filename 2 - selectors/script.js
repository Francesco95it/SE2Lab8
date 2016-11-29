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
		//hide prg1 element
        $("#prg1").hide();
    });
	
    $("#btt2").click(function(){
		//hide all <p> elements
        $("p").hide();
    });
	
	$("#btt3").click(function(){
		//hide all <p> elements
        $(".ex").hide();
    });
	
});

/* JQuery selectors
$("*")	Selects all elements
$(this)	Selects the current HTML element
$("p.intro")	Selects all <p> elements with class="intro"
$("p:first")	Selects the first <p> element
$("ul li:first")	Selects the first <li> element of the first <ul>
$("ul li:first-child")	Selects the first <li> element of every <ul>
$("[href]")	Selects all elements with an href attribute
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
$("tr:even")	Selects all even <tr> elements
$("tr:odd")	Selects all odd <tr> elements

**http://www.w3schools.com/jquery/jquery_selectors.asp

*/