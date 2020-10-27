
    (function($) {
        "use strict"; // Start of use strict
      
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 72)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
        });
      
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#mainNav',
          offset: 75
        });
      
        // Collapse Navbar
        var navbarCollapse = function() {
          if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
          } else {
            $("#mainNav").removeClass("navbar-scrolled");
          }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
      
        // Magnific popup calls
        $('#portfolio').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
        });
      
      })(jQuery); // End of use strict
      
      
      $("#navbarDropdown").on("click", function(){
        $(".dropdown-menu").slideToggle(400);
      });




// =====================   
// information tabs
// =====================

// var info = document.querySelectorAll(".review-and-info .nav .nav-link");

// for(var i=0; i<info.length; i++){
//   info[i].addEventListener("click",function(){
//     document.querySelector(".active").classList.remove("active");
//     this.classList.add("active");
//   })
// }


var specification = document.querySelector(".specification");

specification.addEventListener("click",function(){
  document.querySelector(".active").classList.remove("active");
  this.classList.add("active");
  document.querySelector("#reviews").classList.remove("display");
  document.querySelector("#reviews").classList.add("remove");
  document.querySelector("#specification").classList.remove("remove");
  document.querySelector("#specification").classList.add("display");
});

var reviews = document.querySelector(".reviews");

reviews.addEventListener("click",function(){
  document.querySelector(".active").classList.remove("active");
  this.classList.add("active");
  document.querySelector("#specification").classList.remove("display");
  document.querySelector("#specification").classList.add("remove");
  document.querySelector("#reviews").classList.remove("remove");
  document.querySelector("#reviews").classList.add("display");
});


// ===================
// Wishlist
// ===================

var heart = document.querySelector(".wishlist .heart");

heart.addEventListener("click",function(){
  if(document.querySelector(".fa-heart").getAttribute("data-prefix") == "far"){
    document.querySelector(".fa-heart").setAttribute("data-prefix","fas");
    document.querySelector(".wishlist-text").textContent = "Added to Wishlist";
  }
  else if(document.querySelector(".fa-heart").getAttribute("data-prefix") == "fas"){
    document.querySelector(".fa-heart").setAttribute("data-prefix","far");
    document.querySelector(".wishlist-text").textContent = "Add to Wishlist";
  }
 
});


// ====================
// star rating
// ====================

var stars = document.querySelectorAll(".add-review .stars span");

var starContainer = document.querySelector(".add-review .stars");

var addHovering = function(){
  var num = Number(this.classList[1]);
  for(var j=0; j<num; j++){
    stars[j].children[0].setAttribute("data-prefix","fas");
  }
}

var removeHovering = function(){
  this.children[0].setAttribute("data-prefix","far");
}

var removeHoveringCompletely = function(){
  for(var i=0; i<stars.length; i++){
    stars[i].children[0].setAttribute("data-prefix","far");
  }
}

var addStars = function(){

  var num = Number(this.classList[1]);
  for(var j=0; j<num; j++){
    stars[j].children[0].setAttribute("data-prefix","fas");
  }
  for(var j=num; j<stars.length; j++){
    stars[j].children[0].setAttribute("data-prefix","far");
  }

  for(var i=0; i<stars.length; i++){
    stars[i].removeEventListener("mouseover",addHovering);
  
  }

  for(var i=0; i<stars.length; i++){

    stars[i].removeEventListener("mouseout",removeHovering);
  }


  starContainer.removeEventListener("mouseout",removeHoveringCompletely);

  
}

for(var i=0; i<stars.length; i++){
  stars[i].addEventListener("mouseover",addHovering);

}

for(var i=0; i<stars.length; i++){
  stars[i].addEventListener("mouseout",removeHovering);
}

for(var i=0; i<stars.length; i++){
  stars[i].addEventListener("click",addStars);
}



  

starContainer.addEventListener("mouseout",removeHoveringCompletely);




var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var displayQuantity = document.querySelector(".display-quantity");

plus.addEventListener("click",function(){
  var quantity = Number(displayQuantity.textContent);
  quantity++;
  displayQuantity.textContent = quantity;
});

minus.addEventListener("click",function(){
  var quantity = Number(displayQuantity.textContent);
  if(quantity>1){
    quantity--;
    displayQuantity.textContent = quantity;
  }
});
