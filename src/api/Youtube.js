import axios from 'axios';

const KEY = 'AIzaSyDR0NZqd2ldV8q8UWAm7wHZbsTn0-9JqY0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        type: 'video',
        key: KEY
    }

});
