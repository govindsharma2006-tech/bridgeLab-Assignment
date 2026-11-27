// Q6 – Event Subscription Panel (jQuery)

$(document).ready(function () {

  function showSuccess(msg) {
    // 5. Success message dynamically inserted into DOM
    $("#successMsg").text(msg).slideDown(300);
    setTimeout(() => $("#successMsg").slideUp(300), 2500);
  }

  // Use event delegation with .on() for dynamically added items
  // 1. Subscribe → enable notifications
  $("#subList").on("click", ".btn-sub", function () {
    const item = $(this).closest(".sub-item");
    const topic = item.data("topic");
    item.addClass("active").find(".sub-status").addClass("on").text("On");
    showSuccess("✅ Subscribed to: " + topic);
  });

  // 2. Unsubscribe → disable notifications
  $("#subList").on("click", ".btn-unsub", function () {
    const item = $(this).closest(".sub-item");
    const topic = item.data("topic");
    item.removeClass("active").find(".sub-status").removeClass("on").text("Off");
    showSuccess("🔕 Unsubscribed from: " + topic);
  });

  // 4. Remove subscription → detach events by removing element from DOM
  $("#subList").on("click", ".btn-remove", function () {
    const item = $(this).closest(".sub-item");
    const topic = item.data("topic");
    // .off() equivalent: removing the element detaches all handlers
    item.slideUp(300, function () {
      $(this).remove();
    });
    showSuccess("🗑 Removed: " + topic);
  });

  // 3. Add new topic dynamically → .on() attaches click events to new elements
  $("#addTopicBtn").on("click", function () {
    const topic = $("#newTopicInput").val().trim();
    if (!topic) return;

    const newItem = $(`
      <div class="sub-item" data-topic="${topic}">
        <span class="sub-name">🆕 ${topic}</span>
        <span class="sub-status">Off</span>
        <div class="sub-actions">
          <button class="btn btn-sm btn-sub">Subscribe</button>
          <button class="btn btn-sm btn-unsub">Unsubscribe</button>
          <button class="btn btn-sm btn-remove">✕</button>
        </div>
      </div>
    `);

    // Because we used event delegation on #subList, .on() events auto-apply
    $("#subList").append(newItem);
    newItem.hide().slideDown(300);
    $("#newTopicInput").val("");
    showSuccess("➕ New topic added: " + topic);
  });

  // Enter key to add topic
  $("#newTopicInput").on("keydown", function (e) {
    if (e.key === "Enter") $("#addTopicBtn").trigger("click");
  });
});
