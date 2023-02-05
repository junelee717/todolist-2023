const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chooseImg = images[Math.floor(Math.random() * images.length)];
const header = document.querySelector("header");

const bgImage = document.createElement("img");
bgImage.src = `images/${chooseImg}`;
header.appendChild(bgImage);