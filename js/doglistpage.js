import dogsList from "./data.js";
import { loadDogListOnPageLoad } from "./domloader.js";
import { newUpdatedDogsList } from "./domloader.js";
// export const newUpdatedDogsList = () => {
//   const dogs = [...dogsList];
//   return dogs.map((dog) => ({
//     ...dog,
//     image: `../${dog.image}`,
//   }));
// };
const updatedDogList = newUpdatedDogsList();
const filterBreed = document.getElementById("breed");
const filterAge = document.getElementById("age");
const filterGender = document.getElementById("gender");
const dogContainer = document.getElementById("doglist");
const loading = document.getElementById("loader");
const resetBtn = document.getElementById("reset");

// loading select values of breeds
const populateBreedOptions = () => {
  const nameSet = new Set();

  updatedDogList.forEach((item) => {
    if (!nameSet.has(item.breed)) {
      const option = document.createElement("option");
      option.value = item.breed.split(" ").join("").toLowerCase();
      option.textContent = item.breed;
      filterBreed.appendChild(option);
      nameSet.add(item.breed);
    }
  });
};

// filtering function to select filters
const filteredData = () => {
  const breedValue = filterBreed.value;
  const ageValue = filterAge.value;
  const genderValue = filterGender.value;
  let filteredList = [...updatedDogList];
  if (
    breedValue === "all" &&
    ageValue === "all" &&
    genderValue === "Select Gender"
  ) {
    return updatedDogList;
  }
  if (breedValue && breedValue !== "all") {
    filteredList = filteredList.filter((dog) => {
      const filterValue = dog.breed.split(" ").join("").toLowerCase();
      return filterValue === breedValue;
    });
  }

  // Apply age filter if selected
  if (ageValue && ageValue !== "all") {
    filteredList = filteredList.filter((dog) => dog.age <= parseInt(ageValue));
  }

  // Apply gender filter if selected
  if (genderValue && genderValue !== "Select Gender") {
    filteredList = filteredList.filter((dog) => dog.gender === genderValue);
  }

  return filteredList;
};

// adding events to all select filters
const allFilters = [filterAge, filterBreed, filterGender];

allFilters.forEach((id) => {
  id.addEventListener("change", () => {
    loading.style.display = "flex";
    loading.textContent = " Filtering .....";
    setTimeout(() => {
      dogContainer.innerHTML = "";
      loadDogListOnPageLoad(
        filteredData(),
        dogContainer,
        "../images/icons/arrow-right.png"
      );
      loading.style.display = "none";
      if (filteredData().length === 0) {
        dogContainer.innerHTML = `<p class="no-result"> NO MATCHING RESULTS FOUND !! </p>`;
      }
    }, 500);
  });
});

// reset button reset the default data
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loading.style.display = "flex";
  loading.textContent = " RESETTING FILTERS .....";
  setTimeout(() => {
    dogContainer.innerHTML = "";
    loadDogListOnPageLoad(
      updatedDogList,
      dogContainer,
      "../images/icons/arrow-right.png"
    );

    filterBreed.value = "all";
    filterAge.value = "all";
    filterGender.value = "Select Gender";

    loading.style.display = "none";
  }, 800);
});

// loading data on first load
document.addEventListener("DOMContentLoaded", () => {
  populateBreedOptions();

  loadDogListOnPageLoad(
    updatedDogList,
    dogContainer,
    "../images/icons/arrow-right.png"
  );
});
