// Q9 – Multi-jQuery Widgets
// jQuery.noConflict() lets both versions coexist:
//   $jq1 → jQuery 3.6.4 (Version 1)
//   $    → jQuery 3.7.1 (Version 2)

// ── Version 1 ($jq1): Carousel Slider ──
$jq1(document).ready(function () {

  const slides = $jq1("#carousel .slide");
  let currentSlide = 0;
  slides.first().show();

  // Rotate to the next slide
  function showSlide(index) {
    slides.hide();
    $jq1(slides[index]).fadeIn(500);
  }

  $jq1("#nextSlideBtn").on("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Auto-rotate every 3 seconds
  setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);

  // Version 1: Highlight active widget
  $jq1(".wbtn").on("click", function () {
    const target = $jq1(this).data("target");
    $jq1(".widget").removeClass("active-widget");
    $jq1("#" + target).addClass("active-widget");
  });

  console.log("jQuery v1 loaded:", $jq1.fn.jquery);
});

// ── Version 2 ($): Modal + Tooltips ──
$(document).ready(function () {

  // Modal popup
  let notifCount = 0;
  $("#openModalBtn").on("click", function () {
    $("#modalBackdrop").addClass("open");
  });

  $("#closeModalBtn").on("click", function () {
    $("#modalBackdrop").removeClass("open");
    notifCount++;
    $("#notifList").text("Notification dismissed " + notifCount + " time(s).");
  });

  // Close on backdrop click
  $("#modalBackdrop").on("click", function (e) {
    if ($(e.target).is("#modalBackdrop")) {
      $("#modalBackdrop").removeClass("open");
    }
  });

  // Tooltips on hover
  $(".tooltip-btn").on("mouseenter", function () {
    $(this).find(".tooltip-box").stop(true).fadeIn(200);
  }).on("mouseleave", function () {
    $(this).find(".tooltip-box").stop(true).fadeOut(150);
  });

  console.log("jQuery v2 loaded:", $.fn.jquery);
  console.log("Both versions running via noConflict(). $jq1 =", $jq1.fn.jquery, ", $ =", $.fn.jquery);
});
