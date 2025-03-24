const PORT = 8000
const axios = require('axios');    
const cheerio = require('cheerio');
const express = require('express');    
const app = express();
const cors = require('cors')

const home = 'https://madoka-exedra.com';
const url = 'https://madoka-exedra.com/en/character/?id=';

// Total amount of characters currently displayed on site. 
const charCount = 12;

// HTTP Request Method (Rooting)
// app.METHOD(PATH, HANDLER)
// app.get => get data from a certain resource / path
// app.post => add data " " " " 
// app.put => edit data " " " "
// app.delete => delete data " " " "

// Allows backend to communicate with front-end.
// "Cross-Origin Resource Sharing"
app.use(cors());

// Req represents incoming HTTP request
app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

// Asynchronous function needed as it waits for scraping then executes code.
app.get('/results', async (req, res) => {

    const characterData = []
    pageID = 0;

    for (let i = 1; i <= charCount; i++) {
        if (i < 10) {
                // Ensure numbers are formatted correctly '01' '02'...
                pageID = i.toString().padStart(2, '0');
            }
            else {
                pageID = i.toString(); 
            }

            const scrapeUrl = url + pageID;

            const response = await axios.get(scrapeUrl);
            const html = response.data;
            const $ = cheerio.load(html);

            // Goes to URL, looks for div class character_detail-name
            // then looks for p tag and scrapes the text and stores it into charName. 
            const charName = $('.character_detail-name').find('p').text();
            const charImage = $('.character_detail-image img').attr('src');
            const charOrigin = $('.character_detail-title').attr('src');

            characterData.push({
                name: charName,
                image: home + charImage,
                origin: home + charOrigin
            })
            
        }
        
        // What gets sent to the server.
        // JSON is a way for a server to send data to a client. Stores key-value pairs <String, Obj>
        // The characters array of characterData objects that contain
        // the characters name and image. 

        res.json( {
            characters: characterData
    })
})

// Starts server at PORT 8000.

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

// Same as 
// app.listen(PORT, function() {
//     console.log(`Server running on PORT ${PORT}`);
//   });