$(document).ready(function(){
	///get
	//text
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
	//html
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
	//value
	$("#btn3").click(function(){
        alert("Value: " + $("#input").val());
    });
	
	///set
	//text
    $("#btn4").click(function(){
        $("#test").text("New paragraph");
    });
	//html
    $("#btn5").click(function(){
        $("#test").html("New <b>paragraph</b>");
    });
	//value
	$("#btn6").click(function(){
        $("#input").val("name2");
    });
	
	///add
	//append
	$("#btn7").click(function(){
        $("#test").prepend("before the paragraph, ");
    });
	//prepend
	$("#btn8").click(function(){
        $("#test").append(", after the paragraph");
    });
	//before
	$("#btn9").click(function(){
		// Create an elment using DOM
		var txt = document.createElement("b");    
    	txt.innerHTML = "before";
		
        $("#test").before(txt);
    });
	//after
	$("#btn10").click(function(){
		// Create an elment using DOM
		var txt = document.createElement("b");    
    	txt.innerHTML = "after";
        $("#test").after(txt);
    });
	
	///remove
	//empty
	$("#btn11").click(function(){
        $("#test").empty();
    });
	//remove
	$("#btn12").click(function(){
        $("#test").remove();
    });
	//remove, select class
	$("#btn13").click(function(){
        $("p").remove(".cls1");
    });
	
});