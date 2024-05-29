import dogsList from "./data.js";
export const convertYearsToMonths = (years) => {
  return Math.round(years * 12);
};
export const newUpdatedDogsList = () => {
  const dogs = [...dogsList];
  return dogs.map((dog) => ({
    ...dog,
    image: `../${dog.image}`,
  }));
};

export const loadDogListOnPageLoad = (listOfDogs, container, linkImage) => {
  listOfDogs.forEach((dog) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = dog.image;
    img.alt = dog.name;
    picture.appendChild(img);

    const cardContent = document.createElement("div");
    cardContent.classList.add("flex", "card-content");

    const contentLeft = document.createElement("div");
    contentLeft.classList.add("content-left");
    const h3 = document.createElement("h3");
    h3.textContent = dog.name;
    const ageInMonths = convertYearsToMonths(dog.age);
    const span = document.createElement("span");
    if (dog.age < 1) {
      span.textContent = `Age: ${ageInMonths} months`;
    } else {
      span.textContent = `Age: ${dog.age} ${dog.age === 1 ? "year" : "years"}`;
    }
    contentLeft.appendChild(h3);
    contentLeft.appendChild(span);

    const contentRight = document.createElement("a");
    contentRight.classList.add("content-right");
    contentRight.href = "/dog-catalog/pages/dog-details.html?id=" + dog.id;
    const imgArrow = document.createElement("img");
    imgArrow.src = linkImage;
    imgArrow.alt = "view more icon";
    contentRight.appendChild(imgArrow);
    cardContent.appendChild(contentLeft);
    cardContent.appendChild(contentRight);

    // Append picture and card content to card
    card.appendChild(picture);
    card.appendChild(cardContent);

    // Append card to grid container
    container.appendChild(card);
  });
};
