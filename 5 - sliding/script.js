$(document).ready(function(){
	$(".show").click(function(){
		//select element of class ex
        $(".flip")
			//show them
			.slideDown("slow");
    });
	
	$("#toggle").click(function(){
		//select element of class ex
        $(".flip")
			//show them
			.toggle("slow");
    });

});

/*
slideDown()
slideUp()
slideToggle()
*/