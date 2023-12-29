/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-top-level-await */
import axiosOverHttp from '../client/client';

(async () => {
    const axios = axiosOverHttp('http://localhost:3000/axios');

    const response = await axios(
        {
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            method: 'get'
        },
    );

    console.log(response);
})();
