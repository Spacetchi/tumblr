$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200 && $(this).width() > 1000) {
			$("#sidebar").fadeIn();
		} else {
			$("#sidebar").fadeOut();
		}
	});
	
    $("#sidebar").click(function(){
        $("#sidetext, #sidepages").toggle();
    });
    
});

document.getElementById("footer").innerHTML='<a href="htp://spacetchi.tumblr.com/" title="theme">&#60;&#47;&#62;</a>';
document.getElementById("footer").style.position="fixed";
document.getElementById("footer").style.bottom="7px";
document.getElementById("footer").style.right="7px";
document.getElementById("footer").style.fontWeight="bold";