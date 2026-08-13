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
