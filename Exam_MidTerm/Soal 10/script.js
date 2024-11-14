let currentImageIndex = 0;
const images = [
    'kucing1.jpg',
    'kucing2.jpg',
    'kucing3.jpg',
    'kucing4.jpg',
    'kucing5.jpg',
    'kucing6.jpg'
];

document.getElementById('prevButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('carouselImage').src = images[currentImageIndex];
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('carouselImage').src = images[currentImageIndex];
});
