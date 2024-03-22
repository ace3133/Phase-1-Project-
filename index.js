fetch('http://localhost:3000/Coffee')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const selectedImageContainer = document.getElementById("selected-image-container");
  const coffeeDescriptions = {
    "Cappuccino": "Cappuccino is a coffee drink that is made with espresso and steamed milk, topped with foamed milk.",
    "Macchiato": "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed.",
    "Espresso": "Espresso is a concentrated coffee drink made by forcing hot water under pressure through finely-ground coffee beans.",
    "Mocha": "Mocha is a chocolate-flavored variant of a latte, often with added sweetness from cocoa powder or chocolate syrup."
  };

  images.forEach(image => {
    // Single click event listener
    image.addEventListener("click", function () {
      const coffeeType = image.alt;
      const selectedImage = document.createElement("img");
      selectedImage.src = image.src;
      selectedImage.alt = coffeeType;
      selectedImage.classList.add("selected-image");

      // Create a paragraph element for the coffee description
      const coffeeDescription = document.createElement("p");
      coffeeDescription.textContent = coffeeDescriptions[coffeeType];
      coffeeDescription.classList.add("coffee-description");

      // Clear the selected image container before appending new content
      selectedImageContainer.innerHTML = "";

      // Append the selected image and its description to the container
      selectedImageContainer.appendChild(selectedImage);
      selectedImageContainer.appendChild(coffeeDescription);

      // Display an alert with the coffee type
      alert(`How was your ${coffeeType}?`);
    });

    // Hover event listener
    image.addEventListener("mouseover", function () {
      // Add a border or shadow effect when hovering over the image
      image.style.border = "2px solid #ffcc00"; 
    });

    image.addEventListener("mouseout", function () {
   
      image.style.border = "none";
    });
  });
});


    const coffeeList = document.getElementById("Coffee");
    coffeeTypes.forEach(coffee => {
      const coffeeItem = document.createElement("p");
      coffeeItem.textContent = coffee;
      coffeeList.appendChild(coffeeItem);
    });