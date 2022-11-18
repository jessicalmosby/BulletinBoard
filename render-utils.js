export function renderCards(card) {
    const div = document.createElement('div');
    div.classList.add('Cards');

    const h3 = document.createElement('h3');
    h3.textContent = card.title;

    const p1 = document.createElement('p');
    p1.textContent = card.description;
    const p2 = document.createElement('p');
    p2.textContent = card.contact;
    p2.classList.add('contact');

    div.append(h3, p1, p2);

    return div;
}
