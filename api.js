const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&include_breeds=true';

export async function fetchCats() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch cats');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
