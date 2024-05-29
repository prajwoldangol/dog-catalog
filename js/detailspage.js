// import dogsList from "./data.js";
import { newUpdatedDogsList } from "./domloader.js";
import { convertYearsToMonths } from "./domloader.js";
const getById = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  console.log(id);
  const data = [...newUpdatedDogsList()];
  return data.filter((dog) => dog.id === id);
};

const loadDetailsById = () => {
  const dog = getById()[0];
  let age = "";
  if (dog.age < 1) {
    age = `${convertYearsToMonths(dog.age)} months`;
  } else {
    age = `${dog.age} ${dog.age === 1 ? "year" : "years"}`;
  }
  document.title = dog.name;
  const dogContainer = document.getElementById("details-page");
  dogContainer.innerHTML = `    <div class="details mt-4">
  <div class="image">
      <img src="${dog.image}" alt="">
  </div>
  <div class="details-content">
      <h2> ${dog.name}</h2>
      <p class="mt-2">${dog.description}
      </p>
      <table class="details-table">
          <caption> Profile</caption>
          <tbody>
              <tr>
                  <td class="left">BREED</td>
                  <td>${dog.breed}</td>
              </tr>
              <tr>
                  <td class="left">Gender</td>
                  <td>${dog.gender}</td>
              </tr>
              <tr>
                  <td class="left">AGE</td>
                  <td>${age}</td>
              </tr>
              <tr>
                  <td class="left">COLOR</td>
                  <td>${dog.color}</td>
              </tr>
              <tr>
                  <td class="left">Likes</td>
                  <td>${dog.likes}</td>
              </tr>
              <tr>
                  <td class="left">height</td>
                  <td>${dog.height}</td>
              </tr>
              <tr>
                  <td class="left">length</td>
                  <td>${dog.length}</td>
              </tr>
          </tbody>
      </table>
      <a href="#" class="mt-4 btn btn-dark" id="inquiry"> Send Inquiry </a>
  </div>
</div>`;
};
document.addEventListener("click", (e) => {
  const target = e.target.closest("#inquiry");
  if (target) {
    e.preventDefault();
    alert(" Your Inquiry is Recieved. We will reach you soon !!");
  }
});

// loading data on first load
document.addEventListener("DOMContentLoaded", () => {
  loadDetailsById();
});
