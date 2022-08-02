window.onscroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";


  if(window.scrollY > 500) {
    document.querySelector('.topNubex').classList.remove('topHide');
    document.querySelector('.sidebar__btn').classList.remove('sidebar__btn__hide');
  } else{
    document.querySelector('.topNubex').classList.add('topHide');
    document.querySelector('.sidebar__btn').classList.add('sidebar__btn__hide');
  };

  
};


var swiper = new Swiper(".mySwiper", {
			speed: 900,
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 6500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});



const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});














$(document).ready(function(){
       $(".accordion").on("click", ".heading", function() {

       $(this).toggleClass("active").next().slideToggle();

       $(".contents").not($(this).next()).slideUp(300);
                    
       $(this).siblings().removeClass("active");
       });
      });




