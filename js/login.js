const login = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username);

  if (!user) {
    alert("User not found. Please register first.");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect username or password.");
    return;
  }

  alert("Login successful! You will be redirected to homepage");
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  window.location.href = "../index.html";
};

document.getElementById("loginForm").addEventListener("submit", login);
