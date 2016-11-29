$(document).ready(function(){
	//get
	$("#btn1").click(function(){
		$.get("http://127.0.0.1:5000/world", function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});
	
	//post
	$("#btn2").click(function(){
		$.post("http://127.0.0.1:5000/pers/male",
		{
			username: "username"
		},
		function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});
	
	//post + Json
	$("#btn3").click(function(){
		$.post("http://127.0.0.1:5000/pers/json",
		{
			username: "username"
		},
		function(data, status){
			alert("Username: " + data.target + "\nStatus: " + status);
		});
	});
		
});