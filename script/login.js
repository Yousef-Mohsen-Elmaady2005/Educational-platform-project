const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredEmail = email.value.trim().toLowerCase();
  const enteredPassword = password.value;
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  if (!enteredEmail || !enteredPassword) {
    alert("من فضلك أكمل جميع البيانات.");
    return;
  }

  if (savedUser && savedUser.email === enteredEmail && savedUser.password === enteredPassword) {
    setTimeout(() => {
      window.location.href = "mainplatform.html";
    }, 1000);
    return;
  }

  alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
});

// Toggle password visibility
document.addEventListener("DOMContentLoaded", () => {
  const togglePwBtns = document.querySelectorAll(".toggle-pw");
  togglePwBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const input = this.previousElementSibling;
      if (input) {
        if (input.type === "password") {
          input.type = "text";
          this.style.opacity = "0.6";
        } else {
          input.type = "password";
          this.style.opacity = "1";
        }
      }
    });
  });
});

