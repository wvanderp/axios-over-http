import express from 'express';
import axiosOverHttpEndpoint from '../server/server';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/axios', axiosOverHttpEndpoint);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Example app listening on port 3000!');
});
