/* script for pop up modals show */
document.getElementById('newsletterBtn').onclick = function() {
	modal = document.getElementById('newsletterModal');
	modal.style.display = "block";
}

document.getElementById('contactBtn').onclick = function() {
	modal = document.getElementById('contactModal');
	modal.style.display = "block";
}


if(document.getElementById('fullsizeBtn')) {
	document.getElementById('fullsizeBtn').onclick = function() {
		modal = document.getElementById('fullsizeModal');
		modal.style.display = "block";
	}
}

var closeCross = document.getElementsByClassName("close");
closeCross[0].onclick = function() { modal.style.display = "none"; }
closeCross[1].onclick = function() { modal.style.display = "none"; }
if(closeCross[2]) { closeCross[2].onclick = function() { modal.style.display = "none"; } }



window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

$(document).ready(function() {
	
	function widthCheck() {
		if ( $(window).width() > 895  ) {
			$("body > nav .main-links > ul").css({
				"display": "flex"
			})
			$("body > nav .main-links ul li a").addClass("a hvr-underline-reveal");
		} else {
			$("body > nav .main-links > ul").css({
				"display": "none"
			})
			$("body > nav .main-links ul li a").removeClass("a hvr-underline-reveal");
		}
		
		if ( $(window).width() < 1150  ) {
			runCarouForAds();
			$(".items").trigger("destroy");
			$("body > nav .main-links").css({
				"width": $(window).width()-85
			})
			$("#main-articles .main-art").css("margin-left", ($(window).width()-600)/2);
		} else {
				  /* corou for 4-7 art */  
			$('.items').carouFredSel({
				items: 4,
				prev: $('.slider .prev'),
				next: $('.slider .next'),
				duration: 500,
				scroll: { 
					items: 1,
					pauseOnHover: true
				}
			});
			runCarouForAds();
			$("body > nav .main-links").css({
				"width": "1210px"
			})
			$("#main-articles .main-art").css("margin-left", ($(window).width()-1150)/2);
		}
		
		//center ads slider for small screen
		if ( $(window).width() < 595 && $(window).width() > 360  ) {
			$("#last-art-advertisement .advertisement .ad").css("margin-left", (($("#last-art-advertisement .last-arts .last-art").width()-310)/2));
		}
		
		if ( $(window).width() < 595 ) {
			$(".main-slider .slider .items .item-container").hover(function() {
				$(this).find("h3").each(function() { $(this).css("color", "white"); })
				$(this).find("p").each(function() { $(this).css("color", "white"); })
			}, function() { 	
				$(this).find("h3").each(function() { $(this).css("color", "#474747"); })
				$(this).find("p").each(function() { $(this).css("color", "#707070"); })
			})
			$("#main-articles .main-art-slider .main-art .text-container ").css("width", $("#last-art-advertisement .last-arts .last-art").width());
		} else {
			$(".main-slider .slider .items .item-container").hover(function() {
				$(this).find("h3").each(function() { $(this).css("color", "#474747"); })
				$(this).find("p").each(function() { $(this).css("color", "#707070"); })
			})
		}
	}
	
	widthCheck();
	$(window).resize(widthCheck);
	
	$("body > nav .menu-nav-icon").click(function() {
		if ( $(window).width() < 895 ) {
			$("body > nav .main-links > ul").slideToggle("fast");
		}
	})
	
	$(".btn-group button").click(function() {
		$(".btn-group .dropdown-menuu").slideToggle("fast");
	})
	
	/* carou for main article */
	$('.main-art-slider').carouFredSel({
		items: 1,
		responsive: true,
     scroll: { 
            items: 1,
            fx: 'fade',
			pauseOnHover: true,
			duration: 950
        },
        pagination: {
            container: $('#main-articles .main-art-slider .main-art .paginate ul'),
            anchorBuilder: function(nr){
               // return '<li><a href="#">'+nr+'</a></li>';
            	return '<li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i></a><span>'+nr+'</span></li>';
			}
        }
    });
	
	/* carou for ads */	
	function runCarouForAds() {
		$('.ad-slider').carouFredSel({
			items: 1,
			responsive: true,
			scroll: { 
				items: 1,
				 fx: 'fade',
				 pauseOnHover: true,
				 duration: 1200
			}
		});
	}
	
	$("#last-art-advertisement .last-arts .last-art").hover(function() {
		$(this).find("h4").each(function() { $(this).css("color", "white"); })
		$(this).find("span").each(function() { $(this).css("color", "white"); })
		$(this).find("p").each(function() { $(this).css("color", "white"); })
	}, function() { 	
		$(this).find("h4").each(function() { $(this).css("color", "#474747"); })
		$(this).find("span").each(function() { $(this).css("color", "#8f8f8f"); })
		$(this).find("p").each(function() { $(this).css("color", "#707070"); })
	})
});