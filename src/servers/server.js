const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const axios = require('axios');

const ID_KEY = 'c9eO1L0uOQFb2BfbAaRD';
const SECRET_KEY = 'M1Ean6tqGj';

app.use(cors());

app.use(bodyParser.json());

app.use('/', (req, res) => {
    console.log('server-search');
    const word = req.query.query;
    console.log(word);
    axios.get('https://openapi.naver.com/v1/search/movie.json', {
        params: {
            query: word,
            display: 10,
            start: 1
        },
        headers: {
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(function (response) {
        console.log(response.data.items);
        const items = response.data.items;
        res.send({ items: items });
    }).catch(function (error) {
        console.log(error);
    });

});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})