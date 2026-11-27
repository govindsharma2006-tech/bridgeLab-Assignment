// Q4 – Special Offer Banner (jQuery)

$(document).ready(function () {

  // 1. Hide All banners
  $("#hideBtn").on("click", function () {
    $(".banner").hide();
  });

  // 2. Show All banners
  $("#showBtn").on("click", function () {
    $(".banner").show();
  });

  // 3. Slide toggle all banners
  $("#slideBtn").on("click", function () {
    $(".banner").slideToggle(500);
  });

  // 4. Fade Out all banners
  $("#fadeOutBtn").on("click", function () {
    $(".banner").fadeOut(600);
  });

  // 5. Fade In all banners
  $("#fadeInBtn").on("click", function () {
    $(".banner").fadeIn(600);
  });

  // Individual close buttons
  $(".close-btn").on("click", function () {
    const id = $(this).data("id");
    $("#" + id).slideUp(300);
  });

  // Auto-rotate banners every 5 seconds using fadeIn / fadeOut
  const banners = $(".banner");
  let currentIndex = 0;

  // Hide all except first to start rotation
  banners.hide();
  $(banners[0]).fadeIn(600);

  setInterval(function () {
    $(banners[currentIndex]).fadeOut(500, function () {
      currentIndex = (currentIndex + 1) % banners.length;
      $(banners[currentIndex]).fadeIn(500);
    });
  }, 5000);
});
