import { createPost } from '../fetch-utils.js';

const createForm = document.querySelector('.create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const post = {
        title: data.get('movie'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    await createPost(post);
    location.replace('../other-page');
});
