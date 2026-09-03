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

// start Toggle password visibility

const togglePwBtns = document.querySelectorAll(".toggle-pw");
togglePwBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (input) {
      if (input.type === "password") {
        input.type = "text";
        this.style.opacity = "1";
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        `;
      } else {
        input.type = "password";
        this.style.opacity = "0.6";
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        `;
      }
    }
  });
});
// END Toggle password visibility
