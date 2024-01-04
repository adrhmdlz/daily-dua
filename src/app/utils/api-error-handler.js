import axios from 'axios';
import { showResponseMessage } from './show-response-message';

export const handleApiError = (error) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            if (error.response.status === 404) {
                showResponseMessage('Data not found');
            } else if (error.response.status === 500) {
                showResponseMessage('Server error');
            } else {
                showResponseMessage('Network response was not ok');
            }
        } else if (error.request) {
            showResponseMessage('No response received');
        } else {
            showResponseMessage('Error setting up the request');
        }
    } else {
        showResponseMessage(error.message);
    }
};
