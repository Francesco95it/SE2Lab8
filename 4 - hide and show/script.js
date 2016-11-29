$(document).ready(function(){
    $(".hide").click(function(){
		//start from the element selected
        $(this)
			//go up one level and select the elements  with the class "ex"
			.parents(".ex")
			//hide that elements
			.hide("slow");
    });
	
	$(".show").click(function(){
		//select element of class ex
        $(".ex")
			//show them
			.show("fast");
    });
	
	
});

//.toggle();

//fadeIn(speed,callback)
//fadeOut(speed,callback)
//fadeToggle(speed,callback)
//fadeTo(speed,opacity,callback)