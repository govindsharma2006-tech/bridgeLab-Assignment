// Q1 – Welcome Page Greeting (jQuery)

$(document).ready(function () {

  // 1. Time-based greeting on page load
  const hour = new Date().getHours();
  let greetingText = "";
  if (hour < 12)       greetingText = "☀️ Good Morning! Start your day with us.";
  else if (hour < 17)  greetingText = "🌤️ Good Afternoon! Hope your day is going well.";
  else                 greetingText = "🌙 Good Evening! Relax and explore our site.";
  $("#greeting").text(greetingText);

  const quotes = [
    "💡 The best way to get started is to quit talking and begin doing.",
    "🚀 Push yourself, because no one else is going to do it for you.",
    "🌟 Great things never come from comfort zones.",
    "🔥 Dream it. Wish it. Do it.",
    "✨ Success doesn't just find you — you have to go out and get it.",
  ];
  let quoteIndex = 0;

  // 2. Change Greeting button → cycle through motivational quotes
  $("#changeGreetingBtn").on("click", function () {
    $("#greeting").fadeOut(300, function () {
      $(this).text(quotes[quoteIndex % quotes.length]).fadeIn(300);
      quoteIndex++;
    });
  });

  // 3. Toggle visibility of welcome message
  $("#toggleMsgBtn").on("click", function () {
    $("#welcome-msg").slideToggle(400);
    $(this).text(
      $("#welcome-msg").is(":visible") ? "Toggle Message" : "Show Message"
    );
  });

  // 4. Alert when greeting text is clicked
  $("#greeting").on("click", function () {
    alert("🎉 You clicked the greeting!\n\n" + $(this).text());
  });
});
