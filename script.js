const passwordInput = document.getElementById("password");
const result = document.getElementById("result");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  checkPasswordStrength(password);
});

function checkPasswordStrength(password) {
  if (password.length < 8) {
    setResult("Password must be at least 8 characters", "red");
    return;
  }

  if (!/[0-9]/.test(password)) {
    setResult("Weak password: add numbers", "red");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    setResult("Weak password: add uppercase letters", "red");
    return;
  }

  if (!/[a-z]/.test(password)) {
    setResult("Weak password: add lowercase letters", "red");
    return;
  }

  if (!/[!@#$%^&*(){}<>.,?]/.test(password)) {
    setResult("Medium password: add special characters", "orange");
    return;
  }

  setResult("Strong password 💪", "green");
}

function setResult(message, color) {
  result.textContent = message;
  result.style.color = color;
}
