//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const downloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
    img.src = url;
  });
};

// Function to download all images in parallel
const downloadImages = (imageUrls) => {
  const promises = images.map((image) => downloadImage(image.url));
  return Promise.all(promises);
};

// Function to display images on the webpage
const displayImages = (images) => {
  const outputDiv = document.getElementById('output');
  images.forEach((img) => {
    output.appendChild(img);
  });
};

// Event listener for button click
btn.addEventListener('click', () => {
  downloadImages(images)
    .then((images) => displayImages(images))
    .catch((error) => console.error(error.message));
});
