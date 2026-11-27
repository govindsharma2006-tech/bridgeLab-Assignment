// Q5 – Team Members Directory (jQuery)

$(document).ready(function () {

  // 1. Click on manager → highlight all direct reports (siblings) in that department
  $(".member.manager .member-name").on("click", function (e) {
    e.stopPropagation();
    const manager = $(this).closest(".member");
    // Direct reports are sibling <li> elements after the manager
    manager.siblings(".member").toggleClass("highlighted");
  });

  // 2. Hover on employee → show contact info using .next()
  $(".member-name").on("mouseenter", function () {
    $(this).next(".contact-info").slideDown(200);
  }).on("mouseleave", function () {
    $(this).next(".contact-info").slideUp(150);
  });

  // 3. Click on department → highlight all member children using .children()
  $(".dept").on("click", function (e) {
    // Only fire when clicking the dept container, not inner elements
    if (!$(e.target).hasClass("dept") && !$(e.target).hasClass("dept-title")) return;
    $(this).find(".team-list").children(".member").toggleClass("sibling-highlight");
  });

  // 4. Random employee highlight → highlight that employee and its siblings
  $("#randomBtn").on("click", function () {
    $(".member").removeClass("sibling-highlight");
    const allMembers = $(".member");
    const randomMember = allMembers.eq(Math.floor(Math.random() * allMembers.length));
    randomMember.css("background", "#1e3a5f").css("border-color", "#60a5fa");
    // Highlight siblings
    randomMember.siblings(".member").addClass("sibling-highlight");
    setTimeout(() => {
      randomMember.css("background", "").css("border-color", "");
      $(".member").removeClass("sibling-highlight");
    }, 2500);
  });

  // 5. Collapse / expand all teams using .parent() and .find()
  let collapsed = false;
  $("#collapseBtn").on("click", function () {
    collapsed = !collapsed;
    // .find() locates all team-lists inside each dept, .parent() demo
    $(".dept").find(".team-list").slideToggle(400);
    $(this).text(collapsed ? "⬇ Expand All" : "⬆ Collapse / Expand All");
  });
});
