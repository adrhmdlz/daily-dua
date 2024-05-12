import axios from 'axios';
import { renderAllDua } from '../../app';
import { handleApiError } from '../../utils/api-error-handler';

const baseUrl = 'https://dua-dhikr.vercel.app';

// Fetch all dua list with GET method
export const getDua = () => {
    axios({
        method: 'get',
        url: `${baseUrl}/categories/daily-dua`,
        headers: {
            'Accept-Language': 'id',
        },
    })
        .then((response) => {
            if (!response.data) {
                throw new Error('Data not found');
            }
            renderAllDua(response.data.data);
        })
        .catch((error) => {
            handleApiError(error);
        });
};

// Fetch dua details with GET method
export const getDuaDetails = (duaId) => {
    const modalBody = document.querySelector(`#cardModal-${duaId} .modal-body`);

    axios({
        method: 'get',
        url: `${baseUrl}/categories/daily-dua/${duaId}`,
        headers: {
            'Accept-Language': 'id',
        },
    })
        .then((response) => {
            const data = response.data;
            let modalContent = `
                <p class="text-end arab">${data.data.arabic}</p>
                <p><em>${data.data.latin}</em></p>
                <h6 class="fw-bold">Terjemahan</h6>
                <p>${data.data.translation}</p>
                <h6 class="fw-bold">Faedah</h6>
                <p>${data.data.fawaid}</p>
                <h6 class="text-center fw-bold">${data.data.source}</h6>
            `;
            modalBody.innerHTML = modalContent;
        })
        .catch((error) => {
            handleApiError(error);
        });
};
