// JavaScript Document
function tabSwitch1(new_tab, new_content) {
	
	document.getElementById('content1').style.display = 'none';
	document.getElementById('content2').style.display = 'none';		
	document.getElementById('content3').style.display = 'none';
	document.getElementById(new_content).style.display = 'block';	
	

	document.getElementById('tab1').className = '';
	document.getElementById('tab2').className = '';		
	document.getElementById('tab3').className = '';	
	document.getElementById(new_tab).className = 'active';		

}
function tabSwitch(new_tab, new_content) {
	
	document.getElementById('content_1').style.display = 'none';
	document.getElementById('content_2').style.display = 'none';		
	document.getElementById(new_content).style.display = 'block';	
	

	document.getElementById('tab_1').className = '';
	document.getElementById('tab_2').className = '';		
	document.getElementById(new_tab).className = 'active';		

}

// Ties a set of tabs and content id's together, and switches between them
// <div id='tab_1'> and <div id="content_1"> for example
// Usage: tabswitch(1, 4, 'tab', 'panel') would switch on tab_1 and panel_1

function tabSwitch_2(active, number, tab_prefix, content_prefix) {
	
	for (var i=1; i < number+1; i++) {
		document.getElementById(content_prefix+i).style.display = 'none';
		document.getElementById(tab_prefix+i).className = '';
	}
	document.getElementById(content_prefix+active).style.display = 'block';
	document.getElementById(tab_prefix+active).className = 'active';	
	
}


$(document).ready(function(){
	var popup_height = $("#popup").height();
	var popup_width =$("#popup").width();
	$("#popup").css('top',(($(window).height()-popup_height)/2));
	$("#popup").css('left',(($(window).width()-popup_width)/2));
});



$(document).ready(function(){
	$("#updateshow").click(function(){
		if( $("#update").css('right') == '0px' ){
			$("#update").animate({
				'right':'-310px'
			});
			$('#updateshow').html('Updates | Credits');           
		}
		else{
			$("#update").animate({
				'right':'0px'
			});
			$('#updateshow').html('Updates | Credits');
		}
	});
/*$("#update").click(function(){
        
           if( $("#update").css('right') == '0px' ){
            $("#update").animate({
                'right':'-220px'
            });
            $('#updateshow').html('Updates');           
        }
    });*/
});


$(document).ready(function(){
	$(".contactLink").click(function(){
		if ($("#contactForm").is(":hidden")){
			$("#contactForm").slideDown("slow");
		}
		else{
			$("#contactForm").slideUp("slow");
		}
	});
});
function closeForm(){
	$("#messageSent").show("slow");
	setTimeout('$("#messageSent").hide();$("#contactForm").slideUp("slow")', 2000);
}

$(document).ready(function() {
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
			&& location.hostname == this.hostname
			&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		if ($target) {
			var targetOffset = $target.offset().top;
			$(this).click(function() {
				$('html, body').animate({scrollTop: targetOffset}, 400);
				var d = document.createElement("div");
				d.style.height = "101%";
				d.style.overflow = "hidden";
				document.body.appendChild(d);
				window.scrollTo(0,scrollToM);
				setTimeout(function() {
					d.parentNode.removeChild(d);
				}, 10);
				return false;
			});
		}
	}
});
});