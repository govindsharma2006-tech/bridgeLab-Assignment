// Q8 – Dynamic Blog Posts (jQuery)

$(document).ready(function () {

  let postCount = 3;

  function makePost(title, excerpt, tags, date, isFeatured = false) {
    const tagHtml = tags.map(t => `<span class="tag">${t}</span>`).join("");
    return $(`
      <div class="post ${isFeatured ? "featured" : ""}">
        <div class="post-title">${title}</div>
        <div class="post-excerpt">${excerpt}</div>
        <div class="post-tags">${tagHtml}</div>
        <div class="post-date">${date}</div>
      </div>
    `).hide();
  }

  // 1. Append new post to the bottom of the list
  $("#appendBtn").on("click", function () {
    postCount++;
    const post = makePost(
      "New Blog Post #" + postCount,
      "This is a dynamically appended post. It was added to the end of the list using jQuery .append().",
      ["New", "Dynamic"],
      new Date().toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })
    );
    $("#postList").append(post);
    post.slideDown(400);
  });

  // 2. Prepend featured post to the top using .prepend()
  $("#prependBtn").on("click", function () {
    postCount++;
    const post = makePost(
      "⭐ Featured: Top Pick #" + postCount,
      "This featured post was inserted at the top using jQuery .prepend(). It is highlighted as a featured article.",
      ["Featured", "Top Pick"],
      new Date().toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }),
      true
    );
    $("#postList").prepend(post);
    post.slideDown(400);
  });

  // 3. Remove the last post using .last() and .remove()
  $("#removeBtn").on("click", function () {
    const lastPost = $("#postList .post").last();
    if (lastPost.length) {
      lastPost.slideUp(350, function () { $(this).remove(); });
    }
  });

  // 4. Add tags using .before() and .after()
  $("#addTagBtn").on("click", function () {
    // .before() — inserts a label BEFORE the tags section of each post
    // .after()  — inserts a "last updated" note AFTER the date
    $("#postList .post").each(function () {
      if (!$(this).find(".tag-label").length) {
        $(this).find(".post-tags").before('<div class="tag-label" style="font-size:.7rem;color:#64748b;margin-top:6px;">Tags:</div>');
        $(this).find(".post-date").after('<div style="font-size:.7rem;color:#64748b;margin-top:2px;">Updated: just now</div>');
      }
    });
  });

  // 5. Highlight posts containing a specific keyword
  $("#highlightBtn").on("click", function () {
    const keyword = $("#keywordInput").val().trim().toLowerCase();
    if (!keyword) return;
    $(".post").removeClass("highlighted");
    $(".post").each(function () {
      const text = $(this).text().toLowerCase();
      if (text.includes(keyword)) {
        $(this).addClass("highlighted");
      }
    });
  });

  $("#keywordInput").on("keydown", function (e) {
    if (e.key === "Enter") $("#highlightBtn").trigger("click");
  });
});
