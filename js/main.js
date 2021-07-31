$(document).ready(function() {
  var hotelslider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
  var reviewsslider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log('click on');
    document.querySelector(".navbar-navigate")
    .classList.toggle("navbar-navigate--visible");
  });

  var openModalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  openModalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  // $(document).keydown('which == 27', function closeModal(event) {
  //   event.preventDefault();
  //   var modalOverlay = $(".modal__overlay");
  //   var modalDialog = $(".modal__dialog");
  //   modalOverlay.removeClass("modal__overlay--visible");
  //   modalDialog.removeClass("modal__dialog--visible");
  // });

  //обработка форм
  $('.form').each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Minimum number of characters 2",
        },
        phone: {
          required: "Please specify your phone number",        
        },
        email: {
          required: "Please specify your email",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });  
  });
});