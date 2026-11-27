// Q2 – Product Highlight (jQuery)

$(document).ready(function () {

  // 1. Click on a product → toggle highlight background
  $(".product").on("click", function () {
    $(this).toggleClass("highlighted");
  });

  // 2. Hover over product → show/hide additional details
  $(".product").on("mouseenter", function () {
    $(this).find(".details").slideDown(250);
  }).on("mouseleave", function () {
    $(this).find(".details").slideUp(200);
  });

  // 3. Click Favourite icon → toggle selected class (heart icon)
  $(".fav").on("click", function (e) {
    e.stopPropagation(); // prevent product click firing
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "❤️" : "🤍");
  });

  // 4. Products with discount → styled via attribute selector in CSS
  //    jQuery also adds a visual cue for discounted items
  $(".product[data-discount='true']").css("box-shadow", "0 0 0 1px #4ade80");

  // 5. Alert if product is out of stock (data-stock="0")
  $(".product[data-stock='0']").on("click", function (e) {
    e.stopPropagation();
    alert("⚠️ Sorry! \"" + $(this).find(".name").text().replace(/ — OUT OF STOCK/, "") + "\" is currently out of stock.");
  });
});
