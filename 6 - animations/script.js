/*
By default, all HTML elements have a static position, and cannot be moved. 
To manipulate the position, remember to first set the CSS position property 
of the element to relative, fixed, or absolute!
*/

$(document).ready(function(){
	$("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
	
	//queue
	/*$("#btt2").click(function(){
		var div = $("div");
		div.animate({height: '300px', opacity: '0.4'}, "slow");
		div.animate({width: '300px', opacity: '0.8'}, "slow");
		div.animate({height: '100px', opacity: '0.4'}, "slow");
		div.animate({width: '100px', opacity: '0.8'}, "slow");
	}); */
	

});