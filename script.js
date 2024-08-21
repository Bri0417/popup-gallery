// Data for the gallery items and their respective image collections
const galleryData = [
    {
        title: 'Movie 1',
        thumbnail: 'images/img-1.jpeg',
        images: ['images/img-1.jpeg', 'images/img-2.jpg', 'images/img-3.jpg']
    },
    {
        title: 'Movie 2',
        thumbnail: 'images/img-3.jpg',
        images: ['images/img-8.jpg', 'images/img-4.jpg', 'images/img-5.jpg']
    },
    {
        title: 'Movie 3',
        thumbnail: 'images/img-6.jpg',
        images: ['images/img-6.jpg', 'images/img-7.jpeg', 'images/img-8.jpg']
    },
    // Add more items as needed
];

const galleryContainer = document.getElementById('gallery');
const popupSlider = document.getElementById('popup-slider');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.querySelector('.close');
let currentIndex = 0;
let currentImages = [];

// Function to create gallery items dynamically
function createGallery() {
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;

        const imgElement = document.createElement('img');
        imgElement.src = item.thumbnail;
        imgElement.alt = item.title;

        const titleElement = document.createElement('div');
        titleElement.className = 'title';
        titleElement.textContent = item.title;

        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(titleElement);

        galleryContainer.appendChild(galleryItem);

        galleryItem.addEventListener('click', () => openSlider(index));
    });
}

// Function to open the slider and show the images for the clicked item
function openSlider(index) {
    currentImages = galleryData[index].images;
    currentIndex = 0;
    showGallerySlide(currentIndex);
    popupSlider.style.display = 'flex';
}

// Function to show a specific slide
function showGallerySlide(index) {
    if (index >= currentImages.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = currentImages.length - 1;
    }
    popupImage.src = currentImages[currentIndex];
}

// Function to change slides
function changeSlide(step) {
    currentIndex += step;
    showGallerySlide(currentIndex);
}

// Close the popup slider when the close button is clicked
closeBtn.addEventListener('click', () => {
    popupSlider.style.display = 'none';
});

// Close the popup slider when clicking outside the image
window.addEventListener('click', (e) => {
    if (e.target === popupSlider) {
        popupSlider.style.display = 'none';
    }
});

// Initialize the gallery on page load
createGallery();

/****************************************/ 

// Banner Slider
const slides = document.querySelectorAll('.banner-slider .slide');
const nextSlideBtn = document.querySelector('.banner-slider .next');
const prevSlideBtn = document.querySelector('.banner-slider .prev');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.left = '100%';
    });
    slides[index].classList.add('active');
    slides[index].style.left = '0';
}

nextSlideBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevSlideBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto Slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

