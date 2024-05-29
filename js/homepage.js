import dogsList from "./data.js";
import { loadDogListOnPageLoad } from "./domloader.js";
const randomDogsList = (dogsList) => {
  const dogs = [...dogsList];
  for (let i = dogs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dogs[i], dogs[j]] = [dogs[j], dogs[i]];
  }
  return dogs.slice(0, 4);
};

const listOfRandomDogs = randomDogsList(dogsList);

const dogContainer = document.getElementById("doglist");

//load data on page load
document.addEventListener("DOMContentLoaded", () => {
  loadDogListOnPageLoad(
    listOfRandomDogs,
    dogContainer,
    "images/icons/arrow-right.png"
  );
});
