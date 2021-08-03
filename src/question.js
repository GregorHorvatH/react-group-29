import axios from 'axios';
import qs from 'query-string';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '21793767-b218360da72fb262d25a858fe';
    const PER_PAGE = 12;

    const query = {
      image_type: 'photo',
      orientation: 'horizontal'
    };

    return axios
        .get(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=` +
        `${currentPage}&key=${API_KEY}&per_page=${PER_PAGE}`
    )
    .then(response =>response.data.hits)
}

export default fetchHits;



import axios from 'axios';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21793767-b218360da72fb262d25a858fe&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response =>response.data.hits)
}

export default fetchHits;

// Почему в 1 случае грузит первые 12 елементов и при нажатии кнопки LoadMore загружает все те же 12 элементов?
// Во 2 случае, когда все данные записаны в fetch все отрабатывает хорошо.

