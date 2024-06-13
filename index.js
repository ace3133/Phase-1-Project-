document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/Coffee")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(coffees => {
      const coffeeList = document.getElementById("Coffee");
      coffees.forEach(coffee => {
        const coffeeItem = document.createElement("p");
        coffeeItem.textContent = coffee.name;
        coffeeList.appendChild(coffeeItem);
      });
    })
    .catch(error => {
      console.error("Error fetching coffee data:", error);
    });

  const images = document.querySelectorAll(".image-container img");
  const selectedImageContainer = document.getElementById("selected-image-container");
  const coffeeDescriptions = {
    "Cappuccino": "Cappuccino is a coffee drink that is made with espresso and steamed milk, topped with foamed milk.",
    "Macchiato": "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed.",
    "Espresso": "Espresso is a concentrated coffee drink made by forcing hot water under pressure through finely-ground coffee beans.",
    "Mocha": "Mocha is a chocolate-flavored variant of a latte, often with added sweetness from cocoa powder or chocolate syrup."
  };

  images.forEach(image => {
    image.addEventListener("click", function () {
      const coffeeType = image.alt;
      const selectedImage = document.createElement("img");
      selectedImage.src = image.src;
      selectedImage.alt = coffeeType;
      selectedImage.classList.add("selected-image");

      const coffeeDescription = document.createElement("p");
      coffeeDescription.textContent = coffeeDescriptions[coffeeType];
      coffeeDescription.classList.add("coffee-description");

      selectedImageContainer.innerHTML = "";
      selectedImageContainer.appendChild(selectedImage);
      selectedImageContainer.appendChild(coffeeDescription);

      alert(`How was your ${coffeeType}?`);
    });

    image.addEventListener("mouseover", function () {
      image.style.border = "2px solid #ffcc00";
    });

    image.addEventListener("mouseout", function () {
      image.style.border = "none";
    });
  });
});
