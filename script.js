// Simple front-end behaviors using jQuery

$(function () {
  // Fake cart counter animation when clicking any product card
  $('.product-card').on('click', function () {
    const $count = $('.cart-count');
    let current = parseInt($count.text(), 10) || 0;
    current += 1;
    $count.text(current);

    // Small animation
    $count.addClass('cart-bump');
    setTimeout(() => $count.removeClass('cart-bump'), 200);
  });

  // Smooth scroll to top
  $('.back-to-top-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  // Simple search form handler
  $('.search-form').on('submit', function (e) {
    e.preventDefault();
    const query = $('.search-input').val().trim();
    if (!query) return;

    alert('Searching for: ' + query);
  });
});
