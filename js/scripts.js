
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
	console.log("document loaded!");

	$(window).on("load",function() {
		$(window).scroll(function() {
		  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		  $(".portfolioGridAreaText, .portfolioGridAreaTextRight").each(function() {
			/* Check the location of each desired element */
			var objectBottom = $(this).offset().top + $(this).outerHeight();
		  
			
			/* If the element is completely within bounds of the window, fade it in */
			if (objectBottom < windowBottom) { //object comes into view (scrolling down)
			  if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
			} else { //object goes out of view (scrolling up)
			  if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
			}

		  });
		}).scroll(); //invoke scroll-handler on page-load
	  });

	  $(document).ready(function(){
		$('.mobile-view').click(function(){
			$('.mobile-menu').slideToggle('expand');
		});
	});

	$(document).ready(function () {
		$("portfolioGrid").fadeIn(1000).removeClass('hidden');
	});