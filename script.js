const imageUrls = [
    "https://i.pinimg.com/564x/d1/af/bc/d1afbc6b812df6f8e37568764426a395.jpg",
    "https://i.pinimg.com/736x/db/54/95/db549506c3ffb49cbf50c2a468345f06.jpg",
    // Add more image URLs here
];

// Reference to the feed container
const imageFeed = document.getElementById("imageFeed");

// Dynamically generate and append image elements
imageUrls.forEach(url => {
    console.log("Adding image:", url);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const imageElement = document.createElement("img");
    imageElement.src = url;
    imageElement.width = 500; // Set your desired width

    imageContainer.appendChild(imageElement);
    imageFeed.appendChild(imageContainer);
});
