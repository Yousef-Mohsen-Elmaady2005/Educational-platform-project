const resetPasswordForm = document.querySelector("#reset-password-form");
const newPassword = document.querySelector("#new-password");
const confirmNewPassword = document.querySelector("#confirm-new-password");

resetPasswordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!newPassword.value || !confirmNewPassword.value) {
    alert("من فضلك أكمل جميع البيانات.");
    return;
  }

  // Same password rule used in the registration page.
  if (newPassword.value.length < 6) {
    alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
    return;
  }

  if (newPassword.value !== confirmNewPassword.value) {
    alert("كلمتا المرور غير متطابقتين.");
    return;
  }

  const resetEmail = localStorage.getItem("resetEmail");
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  if (savedUser && savedUser.email === resetEmail) {
    savedUser.password = newPassword.value;
    localStorage.setItem("user", JSON.stringify(savedUser));
  }

  localStorage.setItem("password", newPassword.value);
  localStorage.removeItem("resetEmail");
  alert("تم تغيير كلمة المرور بنجاح.");
  window.location.href = "login.html";
});

// Toggle password visibility helper
window.togglePassword = function (inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const triggerEl = document.querySelector(`[onclick="togglePassword('${inputId}')"]`);
  if (!triggerEl) return;

  if (input.type === "password") {
    input.type = "text";
    triggerEl.style.opacity = "1";
    // Change to normal open eye icon when visible
    triggerEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    `;
  } else {
    input.type = "password";
    triggerEl.style.opacity = "0.6";
    // Change back to slashed eye icon (eye-off) when hidden
    triggerEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </svg>
    `;
  }
};
