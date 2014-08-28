


$(document).ready(function(){			/*document started*/

$('#txt').draggable({containment:'parent'});
$('#save').css("display","none");

/*showing  T-Shirt with sleeves and hiding sleeveless T-Shirt*/

  $("#tson").click(function(){

    $("#tshirt1").show();
    $("#tshirt2").hide();
    $('#favc').show();
    $('#favcolor').show();
    $('#favcolor1').hide();
    $("#fav").hide();
    

  });

/*showing sleeveless T-Shirt and hiding  T-Shirt with sleeves*/


   $("#tsoff").click(function(){
   $("#tshirt2").show();
   $("#tshirt1").hide();
   $('#favc').hide();
   $("#fav").show();
   $('#favcolor1').show();
   $('#favcolor').hide();
  });



/*showing text style proprties*/

$('#atext').click(function () {
$('#next').toggle(function(){
$('.yourtext').show();
$('#txt').show();
$('#fontColor').show();
$('#tsize').show();
$('span.textProperties').show();
$('#fontName').show();
});
});

/*showing text on images*/

 $(".yourtext").keyup(function(){

	var textinput=$("#t1").val();
	$("#txt").text(textinput);

    });


/*selecting size for text on t-shirt*/

$('#tsize').click(function () {

	var s=$("#tsize").val();
	$("#txt").css("font-size",s);

});




/*selecting color for text on image*/

$("#fontColor").focus(function(){

	var c=$("#fontColor").val();
	$("#txt").css("color",c);
       
    });


/*changing fontname for text on image*/

$('#fontName').click(function()
{
if($("#fontName").val()=="Italic")
	
	$("#txt").css("fontStyle","italic");

if($("#fontName").val()=="Normal")
  
  $("#txt").css("fontStyle","normal");

if($("#fontName").val()=="Oblique")
  
 $("#txt").css("fontStyle","oblique");


});



/*to save the changes for image*/

$("#changes").click(function ()
	{
$("#save").css("display", "none");
   html2canvas( [document.getElementById("sample") ], {
     onrendered: function(canvas) 
     {
        $("canvas").remove();
        document.getElementById("save").appendChild(canvas);
     }

     });
  });


/*preview image */


$("#prev").click(function ()
	{

 var shw = document.getElementById("save");

  shw.style.width = window.innerWidth + "px";
   
    setTimeout(function() {

    shw.style.height = window.innerHeight + "px";

  }, 0);
  

$("#tsview").css("display", "none");
$("#main2").css("display", "none");
$("#designshirt").css("display", "none");
$("#save").css({"display":"block", "width":"400px" });
$("#display").css("display", "block");
});



/*After preview to go back*/

$("#display").click(function(){


$("#tsview").css("display", "block");
$("#main2").css("display", "block");
$("#designshirt").css("display", "block");
$("#save").css("display", "none");
$("#display").css("display", "none");
});


 });			/*document closed*/
