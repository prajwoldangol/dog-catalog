const mobile = document.querySelector(".menu-items");
const mainMenu = document.getElementById("navigation");

const changeMenuIcon = () => {
  mobile.classList.toggle("change-icon");
  mainMenu.classList.toggle("mobile-ul");
};

mobile.addEventListener("click", changeMenuIcon);
