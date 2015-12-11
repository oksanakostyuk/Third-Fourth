$(document).ready( function(){
	$( ".prospect" ).click(function() {
	var bla = $('.mytext').val();
	console.log(bla);
	console.log("\'"+bla+ "\'");
	});

	var xhttp; 
	if (window.XMLHttpRequest){  // для нормальных браузеров
   	xhttp=new XMLHttpRequest();
	}
	else {
   	xhttp=new ActiveXObject("Microsoft.XMLHTTP"); //для IE
	}

	
    xhttp.onreadystatechange=function(){
      if (xhttp.readyState==4 && xhttp.status==200)
         console.log(xhttp.responseText);
      }
	xhttp.open('GET','newfile.txt',true);
	xhttp.send();

	/*$.ajax({ 
  		dataType:"jsonp", 
  		type:"POST", 
  		url: "http://weather.yahooapis.com/forecastrss?w=2502265",
  //url:'http://www.test.com/validate.php',
  		//error:function(){
    	//	$("#output").html("Error sending data");
  		//}, 
 		success:function(data){
 			console.log(data);
    		//$("#login").resetForm();
    		//$("#output").html(data.message);
  		}
	}); */
});