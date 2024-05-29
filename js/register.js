const register = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("password2").value;

  const containsNumber = /\d/;
  const containsSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

  if (
    !containsNumber.test(password) ||
    !containsSpecialCharacter.test(password)
  ) {
    alert("Password must contain at least one number or special character.");
    return;
  }

  if (password !== passwordConfirm) {
    alert("Passwords do not match. Please confirm password !!");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("New User Registered successful! Please Login");
  window.location.href = "login.html";
};
document.getElementById("registerForm").addEventListener("submit", register);
