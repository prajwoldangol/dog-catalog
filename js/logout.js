const logout = () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "/dog-catalog/pages/login.html";
};
const isLoggedIn = () => {
  return localStorage.getItem("loggedInUser") !== null;
};

const updateNavigation = () => {
  const logoutMenu = document.getElementById("logoutMenu");
  const loginMenu = document.getElementById("loginMenu");
  const registerMenu = document.getElementById("registerMenu");
  const viewPets = document.getElementById("viewPets");
  if (isLoggedIn()) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const welcomeMessage = `
    <li id="welcomeMessage">
      Welcome ${loggedInUser.username}
    </li>
  `;
    viewPets.insertAdjacentHTML("afterend", welcomeMessage);
    logoutMenu.style.display = "block";
    loginMenu.style.display = "none";
    registerMenu.style.display = "none";
  } else {
    logoutMenu.style.display = "none";
    loginMenu.style.display = "block";
    registerMenu.style.display = "block";
  }
};

document.getElementById("logoutMenu").addEventListener("click", function (e) {
  e.preventDefault();
  logout();
});

document.addEventListener("DOMContentLoaded", () => {
  updateNavigation();
});
