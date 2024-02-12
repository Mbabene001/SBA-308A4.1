export function createCarousel(cats) {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    function showCurrentCat() {
        carousel.innerHTML = '';
        const cat = cats[currentIndex];
        const catImage = document.createElement('img');
        catImage.src = cat.url;
        catImage.alt = 'Cat';
        carousel.appendChild(catImage);
    }

    function showNextCat() {
        currentIndex = (currentIndex + 1) % cats.length;
        showCurrentCat();
    }

    function showPrevCat() {
        currentIndex = (currentIndex - 1 + cats.length) % cats.length;
        showCurrentCat();
    }

    prevButton.addEventListener('click', showPrevCat);
    nextButton.addEventListener('click', showNextCat);

    showCurrentCat();
}
