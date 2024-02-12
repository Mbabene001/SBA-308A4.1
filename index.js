import { fetchCats } from './api.js';
import { createCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const cats = await fetchCats();
        createCarousel(cats);
    } catch (error) {
        console.error('Error fetching cats:', error.message);
    }
});
