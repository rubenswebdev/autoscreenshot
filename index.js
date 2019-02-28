const screenshot = require('desktop-screenshot');
const express = require('express');
const fs = require('fs');
const file = 'mt5.png';

const app = express();

app.get('/', getScreen);

async function getScreen(req, res) {
    const complete = await screenshot(file);

    if (complete && fs.existsSync(`${__dirname}\\${file}`)) {
        res.sendFile(`${__dirname}\\${file}`);
    } else {
        res.write('screenshot indisponível');
    }
}

app.listen(1234, '0.0.0.0', (err) => console.log('server started', err));