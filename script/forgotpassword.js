const form = document.querySelector("#forgot-password-form");
const email = document.querySelector("#email");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    alert("من فضلك أدخل بريدًا إلكترونيًا صحيحًا.");
    return;
  }

  // Keep the email for the next step so the password can be updated for that account.
  localStorage.setItem("resetEmail", emailValue.toLowerCase());
  window.location.href = "forgotpassword2.html";
});
