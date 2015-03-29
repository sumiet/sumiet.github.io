// JavaScript Document



$(window).load(function() {
  $(".loader").fadeOut("slow");
})


function tabSwitch(new_tab, new_content) {
	
	document.getElementById('spell_bee').style.display = 'none';
	document.getElementById('concentric_circles').style.display = 'none';
	document.getElementById('marcos').style.display = 'none';
	document.getElementById('panchayati_raj').style.display = 'none';
	document.getElementById('shabd_dwand').style.display = 'none';
	document.getElementById('quick_flicks').style.display = 'none';
	document.getElementById('creative_writing').style.display = 'none';
	document.getElementById('newsroom').style.display = 'none';
	document.getElementById('viewpoint').style.display = 'none';
	document.getElementById('mythical_extempore').style.display = 'none';
	document.getElementById('rewrite_history').style.display = 'none';
	document.getElementById('vaad_vivaad').style.display = 'none';
	document.getElementById('surprise_event').style.display = 'none';	
	document.getElementById(new_content).style.display = 'block';	
	

	document.getElementById('tab_1').className = '';
	document.getElementById('tab_2').className = '';
	document.getElementById('tab_3').className = '';
	document.getElementById('tab_4').className = '';
	document.getElementById('tab_6').className = '';
	document.getElementById('tab_7').className = '';
	document.getElementById('tab_8').className = '';
	document.getElementById('tab_10').className = '';
	document.getElementById('tab_11').className = '';
	document.getElementById('tab_12').className = '';
	document.getElementById('tab_13').className = '';
	document.getElementById('tab_14').className = '';
	document.getElementById('tab_15').className = '';
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


$(document).ready(function() {

    //this is the useful function to scroll a text inside an element...
    function startScrolling(scroller_obj, velocity, start_from) {
        //bind animation  inside the scroller element
        scroller_obj.bind('marquee', function (event, c) {
            //text to scroll
            var ob = $(this);
            //scroller width
            var sw = parseInt(ob.parent().width());            

            //text width
            var tw = parseInt(ob.width());

            tw = tw - 10;
            //text left position relative to the offset parent
            var tl = parseInt(ob.position().left);
            //velocity converted to calculate duration
            var v = velocity > 0 && velocity < 100 ? (100 - velocity) * 1000 : 5000;
            //same velocity for different text's length in relation with duration
            var dr = (v * tw / sw) + v;
                        
            //is it scrolling from right or left?
            switch (start_from) {
                case 'right':
                    //is it the first time?
                    if (typeof c == 'undefined') {
                        //if yes, start from the absolute right
                        ob.css({
                            left: (sw - 10)
                        });
                        sw = -tw;
                    } else {
                        //else calculate destination position
                        sw = tl - (tw + sw);
                    };
                    break;
                default:
                    if (typeof c == 'undefined') {
                        //start from the absolute left
                        ob.css({
                            left: -tw
                        });
                    } else {
                        //else calculate destination position
                        sw += tl + tw;
                    };
            }
            //attach animation to scroller element and start it by a trigger
            ob.animate({
                left: sw
            }, {
                duration: dr,
                easing: 'linear',
                complete: function () {                    
                    ob.trigger('marquee');
                },
                step: function () {
                    // check if scroller limits are reached
                    if (start_from == 'right') {
                        if (parseInt(ob.position().left) < -parseInt(ob.width())) {
                            //we need to stop and restart animation
                            ob.stop();
                            ob.trigger('marquee');
                        };
                    } else {
                        if (parseInt(ob.position().left) > parseInt(ob.parent().width())) {
                            ob.stop();
                            ob.trigger('marquee');
                        };
                    };
                }
            });
        }).trigger('marquee');
        //pause scrolling animation on mouse over
        scroller_obj.mouseover(function () {
            $(this).stop();
        });
        //resume scrolling animation on mouse out
        scroller_obj.mouseout(function () {
            $(this).trigger('marquee', ['resume']);
        });
    };

    //the main app starts here...

    //settings to pass to function
    var scroller = $('.scrollingtext'); // element(s) to scroll
    var scrolling_velocity = 80; // 1-99
    var scrolling_from = 'right'; // 'right' or 'left'

    //call the function and start to scroll..
    startScrolling(scroller, scrolling_velocity, scrolling_from);
});



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
				$('html, body').animate({scrollTop: targetOffset}, 1000);
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