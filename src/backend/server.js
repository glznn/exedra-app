const PORT = 8000
const axios = require('axios');    
const cheerio = require('cheerio');
const express = require('express');    
const app = express();
const cors = require('cors')

const home = 'https://madoka-exedra.com';
const url = 'https://madoka-exedra.com/en/character/?id=';

const charCount = 12;

// HTTP Request Method (Rooting)
// app.METHOD(PATH, HANDLER)
// app.get => get data from a certain resource / path
// app.post => add data " " " " 
// app.put => edit data " " " "
// app.delete => delete data " " " "

app.use(cors());

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', async (req, res) => {
    const characterData = []
    pageID = 0;

    for (let i = 1; i <= charCount; i++) {
        if (i < 10) {
                pageID = i.toString().padStart(2, '0');
            }
            else {
                pageID = i.toString();
            }

            const scrapeUrl = url + pageID;

            const response = await axios.get(scrapeUrl);
            const html = response.data;
            const $ = cheerio.load(html);

            const charName = $('.character_detail-name').find('p').text();
            const charImage = $('.character_detail-image img').attr('src');

            characterData.push({
                name: charName,
                image: home + charImage
            })
            
        }
        
        // What gets sent to the server.
        // The characters array of characterData objects that contain
        // the characters name and image. 

        res.json( {
            characters: characterData
    })
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
