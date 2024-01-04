import { getDua, getDuaDetails } from './script/data/source';

// Render all dua from data in sources
export const renderAllDua = (data) => {
    const cardListElement = document.querySelector('#card-list');
    cardListElement.innerHTML = '';

    data.forEach((dua) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-6 col-lg-4 col-11';
        cardElement.id = 'card-main';
        cardElement.innerHTML += `
            <div class="card">
                <button type="button" class="card-button" data-bs-toggle="modal" data-bs-target="#cardModal-${dua.id}" data-doa-id="${dua.id}">
                    <div class="card-body">
                        <div class="card-item">
                            <div class="card-id">
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <path
                                        d="M26.5 2.48262L32.4035 10.2683L32.9337 10.9676L33.8031 10.8481L43.4828 9.51715L42.1519 19.1969L42.0324 20.0663L42.7317 20.5965L50.5174 26.5L42.7317 32.4035L42.0324 32.9337L42.1519 33.8031L43.4828 43.4828L33.8031 42.1519L32.9337 42.0324L32.4035 42.7317L26.5 50.5174L20.5965 42.7317L20.0663 42.0324L19.1969 42.1519L9.51715 43.4828L10.8481 33.8031L10.9676 32.9337L10.2683 32.4035L2.48262 26.5L10.2683 20.5965L10.9676 20.0663L10.8481 19.1969L9.51715 9.51715L19.1969 10.8481L20.0663 10.9676L20.5965 10.2683L26.5 2.48262Z"
                                        fill="#D9D9D9"
                                        stroke="#86A789"
                                        stroke-width="3"
                                    />
                                    <text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle">${dua.id}</text>
                                </svg>
                            </div>
                            <div class="card-name">${dua.title}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                        </div>
                    </div>
                </button>
                <div class="modal fade" id="cardModal-${dua.id}" tab-index="-1" aria-labelledby="cardModal-${dua.id}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${dua.title}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p class="text-end arab">...</p>
                                <p class="latin"><em>...</em></p>
                                <h6 class="fw-bold">Terjemahan</h6>
                                <p>$...</p>
                                <h6 class="fw-bold">Faedah</h6>
                                <p>...</p>
                                <h6 class="text-center fw-bold">...</h6>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        cardListElement.appendChild(cardElement);

        const cardButtonElement = cardElement.querySelector('.card-button');

        cardButtonElement.addEventListener('click', () => {
            const duaId = cardButtonElement.getAttribute('data-doa-id');
            getDuaDetails(duaId);
        });
    });
};

export const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
        getDua();

        const filter = document.getElementById('searchElement');
        const renderError = document.querySelector('.error-message');

        filter.addEventListener('input', (e) => filterDua(e.target.value));

        const filterDua = (search) => {
            const duasName = document.querySelectorAll('#card-main');
            let doaNotFound = true;

            duasName.forEach((item) => {
                if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
                    item.classList.remove('d-none');
                    doaNotFound = false;
                } else {
                    item.classList.add('d-none');
                }
            });

            if (doaNotFound) {
                renderError.classList.remove('d-none');
            } else {
                renderError.classList.add('d-none');
            }
        };
    });
};
