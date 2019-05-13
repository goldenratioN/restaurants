$(document).ready(function(){


	// menu and logo area shadow add

	$(window).scroll(function(){

		var topPx = $("html").scrollTop();
		if(topPx>0){
			$(".logo-and-menu-area").addClass("logo-and-menu-area-shadow");
		}else{
			$(".logo-and-menu-area").removeClass("logo-and-menu-area-shadow");
		}
	});

	$('.slider-1').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    stagePadding: 50,
	    responsive:{
	    	0:{
	    		items:1
	    	},
	        425:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})




	var food_menu = $('.food-menu');

	food_menu.isotope({
	    itemSelector: '.item',
	    layoutMode: 'fitRows'
	});

	$('ul.filters > li').on('click', function(e){

	    e.preventDefault();

	    var filter = $(this).attr('data-filter');

	    $('ul.filters > li').removeClass('active');
	    $(this).addClass('active');
	    food_menu.isotope({filter: filter});

	});




	$(".nav-toggle").click(function(){
		$(".main-menu").slideToggle();
	})
  
  
 
});

var all_img = document.getElementsByClassName('single-img');
var current_img = document.getElementById('current-img');
var image_number=-1;
for(var i = 0; i<all_img.length;i++){
	all_img[i].setAttribute("data-img", i+1); 
	all_img[i].addEventListener("click",function(){
	current_img.src = this.src;
	if(image_number>0){
		all_img[image_number-1].classList.remove("img-blur");
	}
	this.classList.add("img-blur");
	image_number = this.getAttribute("data-img");
		
	});
}