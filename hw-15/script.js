$navbar = $('.navbar');
$btnUp = $('.btn-up');
$btnHide = $('.btn-hide-block');

$navbar.click(e => {
   let attr = $(e.target).data('id');
   let currId = $(`#${attr}`);
   $('html, body').animate({'scrollTop': currId.offset().top}, 900);

})

$(window).scroll(e => {
   if ($(window).scrollTop() > $(window).height()) {
      $btnUp.fadeIn();
   } else {
      $btnUp.fadeOut();
   }
})

$btnUp.click(e => {
   $('html, body').animate({'scrollTop': 0}, 900)
}) 

function slideToggle(el) {
   $(el).prev().toggle(400);
}

$btnHide.click(e => {
   slideToggle($(e.target).parent());
   $(e.target).text($(e.target).text() === 'Показать' ? 'Скрыть' : 'Показать');
})