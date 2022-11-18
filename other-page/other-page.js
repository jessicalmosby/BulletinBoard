import { fetchPosts } from '../fetch-utils.js';
import { renderCards } from '../render-utils.js';

const signOutButton = document.getElementById('sign-out-btn');
const createBtn = document.getElementById('create-btn');
// const cards = document.getElementById('cards');
const cardContainer = document.getElementById('card-container');

window.addEventListener('load', async () => {
    const cards = await fetchPosts();
    for (let card of cards) {
        const cardEl = renderCards(card);
        cardContainer.append(cardEl);
    }
});

signOutButton.addEventListener('click', async () => {
    await signOutButton();
});

createBtn.addEventListener('click', () => {
    location.replace('../create');
});
