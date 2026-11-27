// Q3 – Interactive FAQ (jQuery)

$(document).ready(function () {

  // 1. Click on question → toggle answer visibility
  $(".question").on("click", function () {
    const answer = $(this).next(".answer");
    answer.slideToggle(300);
    $(this).toggleClass("open");
  });

  // 2. Hover over question → change text color
  $(".question").on("mouseenter", function () {
    $(this).css("color", "#a78bfa");
  }).on("mouseleave", function () {
    $(this).css("color", "");
  });

  // 3. Double-click on any question → collapse ALL answers
  $(".question").on("dblclick", function () {
    $(".answer").slideUp(300);
    $(".question").removeClass("open");
  });

  // 4. Focus on answer input → highlight parent faq-item
  $(".answer-input").on("focus", function () {
    $(this).closest(".faq-item").addClass("focused");
  });

  // 5. Blur from input → reset parent highlight
  $(".answer-input").on("blur", function () {
    $(this).closest(".faq-item").removeClass("focused");
  });
});
