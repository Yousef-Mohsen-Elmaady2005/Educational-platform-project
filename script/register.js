const registerForm = document.querySelector("#register-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const terms = document.querySelector("#terms");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    username: username.value.trim(),
    email: email.value.trim().toLowerCase(),
    password: password.value,
  };

  if (!user.firstName || !user.lastName || !user.username || !user.email || !user.password || !confirmPassword.value) {
    alert("من فضلك أكمل جميع البيانات.");
    return;
  }

  if (!email.validity.valid) {
    alert("من فضلك أدخل بريدًا إلكترونيًا صحيحًا.");
    return;
  }

  if (user.password.length < 6) {
    alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
    return;
  }

  if (user.password !== confirmPassword.value) {
    alert("كلمتا المرور غير متطابقتين.");
    return;
  }

  if (!terms.checked) {
    alert("يجب الموافقة على الشروط والأحكام.");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("email", user.email);
  localStorage.setItem("password", user.password);

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
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

