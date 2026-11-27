// Q10 – Registration Form Validation (jQuery)

$(document).ready(function () {

  // Pre-registered emails for uniqueness check
  const registeredEmails = ["alice@example.com", "bob@example.com"];

  // Helper: show inline error and highlight field with red border using .css()
  function showError(inputId, errId, msg) {
    $("#" + inputId).css("border-color", "#f87171");
    $("#" + errId).text(msg);
  }

  // Helper: clear error and reset border
  function clearError(inputId, errId) {
    $("#" + inputId).css("border-color", "#334155");
    $("#" + errId).text("");
  }

  // Helper: mark field valid with green border
  function markValid(inputId, errId) {
    $("#" + inputId).css("border-color", "#34d399");
    $("#" + errId).text("");
  }

  // 1. Validate Name → not empty
  function validateName() {
    const val = $("#regName").val().trim();
    if (!val) { showError("regName", "nameErr", "Name is required."); return false; }
    markValid("regName", "nameErr"); return true;
  }

  // 2. Validate Email → valid format and uniqueness
  function validateEmail() {
    const val = $("#regEmail").val().trim().toLowerCase();
    if (!val) { showError("regEmail", "emailErr", "Email is required."); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { showError("regEmail", "emailErr", "Enter a valid email address."); return false; }
    if (registeredEmails.includes(val)) { showError("regEmail", "emailErr", "This email is already registered."); return false; }
    markValid("regEmail", "emailErr"); return true;
  }

  // 3. Validate Password → minimum 8 characters
  function validatePassword() {
    const val = $("#regPassword").val();
    if (!val) { showError("regPassword", "passErr", "Password is required."); return false; }
    if (val.length < 8) { showError("regPassword", "passErr", "Password must be at least 8 characters."); return false; }
    markValid("regPassword", "passErr"); return true;
  }

  function validateRole() {
    const val = $("#regRole").val();
    if (!val) { showError("regRole", "roleErr", "Please select a role."); return false; }
    markValid("regRole", "roleErr"); return true;
  }

  // Live validation — highlight invalid fields dynamically as user types
  $("#regName").on("input", validateName);
  $("#regEmail").on("input", validateEmail);
  $("#regPassword").on("input", validatePassword);
  $("#regRole").on("change", validateRole);

  // Form submit → use jQuery .on("submit") to intercept and prevent default
  $("#regForm").on("submit", function (e) {
    e.preventDefault(); // Stop native form submission

    const nameOk  = validateName();
    const emailOk = validateEmail();
    const passOk  = validatePassword();
    const roleOk  = validateRole();

    // 4. Show success message if all fields are valid
    if (nameOk && emailOk && passOk && roleOk) {
      $("#regForm").fadeOut(400, function () {
        // 5. Success banner dynamically shown via jQuery
        $("#successBanner").fadeIn(500);
      });
    }
  });
});
