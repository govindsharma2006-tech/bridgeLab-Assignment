// Q7 – Search Courses (jQuery)

$(document).ready(function () {

  // Store original titles for clean re-highlighting
  $(".course").each(function () {
    $(this).data("original-title", $(this).find(".course-title").text());
  });

  const totalCourses = $(".course").length;

  // 1 & 3. Real-time filter using .keyup() — toggle visibility of non-matching courses
  $("#searchInput").on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();

    if (!query) {
      resetList();
      return;
    }

    let matchCount = 0;

    $(".course").each(function () {
      const originalTitle = $(this).data("original-title");
      const matches = originalTitle.toLowerCase().includes(query);

      if (matches) {
        $(this).removeClass("hidden").show();
        matchCount++;

        // 2. Highlight matched text using .css() applied via HTML replacement
        const regex      = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
        const highlighted = originalTitle.replace(regex, '<span class="highlight">$1</span>');
        $(this).find(".course-title").html(highlighted);
      } else {
        // 3. Hide non-matching courses
        $(this).addClass("hidden").hide();
      }
    });

    // 4. Show count of matched courses dynamically
    $("#countInfo").text(matchCount + " of " + totalCourses + " courses match \"" + query + "\"");
    $("#noResults").toggle(matchCount === 0);
  });

  // 5. Clear search → reset list to show all courses
  $("#clearBtn").on("click", function () {
    $("#searchInput").val("").trigger("keyup");
  });

  function resetList() {
    $(".course").each(function () {
      $(this).removeClass("hidden").show();
      $(this).find(".course-title").text($(this).data("original-title"));
    });
    $("#countInfo").text("Showing all " + totalCourses + " courses");
    $("#noResults").hide();
  }
});
