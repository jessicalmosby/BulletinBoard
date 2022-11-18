import { fetchPosts } from '../fetch-utils.js';
import { renderCards } from '../render-utils.js';

const signOutForm = document.getElementById('sign-out-form');
const createBtn = document.getElementById('create-btn');
// const cards = document.getElementById('cards');
const cardContainer = document.getElementById('card-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const card = await fetchPosts(id);
    const cardEl = renderCards(card);
    cardContainer.append(cardEl);
});
