//jQuery to collapse the navbar
$(function() {
    $(document).on('click', 'a.nav-link', function(event) {
        $(".navbar-collapse").removeClass("show");
    });
});

// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $(document).on('click', 'a.nav-link', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// $(function() {
//     $(document).on('click', 'a.nav-link', function(event) {
//         var ref = $(this).attr('href');
//         $('.scroll-link').on('click', function(event){
//             event.preventDefault();

//             var sectionID = $(this).attr("data-id");
//             scrollToID('#' + sectionID, 750);        });
//     })
// })

// function scrollToID(id, speed){
//     var offSet = 50;
//     var targetOffset = $(id).offset().top - offSet;
//     var mainNav = $('#main-nav');
//     $('html,body').animate({scrollTop:targetOffset}, speed);
//     if (mainNav.hasClass("open")) {
//         mainNav.css("height", "1px").removeClass("in").addClass("collapse");
//         mainNav.removeClass("open");
//     }
// }