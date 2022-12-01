var express = require('express')
var app = express()
var bodyParser = require('body-parser')
require('dotenv').config()
let fetch = require('cross-fetch')

const port = 3000

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.post('/watson', async (req, res) => {

    console.log(req.params);

    var phrase = req.body.text;

    var response = await fetch('https://api.eu-de.natural-language-understanding.watson.cloud.ibm.com/instances/6c94ff95-22cc-4c85-bfb7-d6f55e1f3522/v1/analyze?version=2019-07-12', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`apikey:${process.env.IBM_WATSON_API_KEY}`)
        },
        body: JSON.stringify({
            text: phrase,
            'features': {
                'keywords': {}
            }
        })

    }).then(async (res) => {
        return res.json();

    }).catch((err) => {

        res.status(500).json({
            error: err
        })
        console.log(err);
    })

    let stringArray = response;

    let scoreArray = [];

    let scoreMax = 0.0;

    let keyword = '';

    //JUST SOME FOR LOOPS ---- NOTHING INTERESTING

    for (let i in stringArray.keywords) {

        scoreArray.push(stringArray.keywords[i]['relevance'])
    }
    scoreMax = Math.max(...scoreArray);

    for (let i in stringArray.keywords) {

        if (stringArray.keywords[i]['relevance'] == scoreMax)

            keyword = stringArray.keywords[i]['text'];
    }

    //Check if watson returned a keyword, if AI didn't find anything relavant just pass the initial phrase

    if (keyword == '') {
        res.status(200).json(await findGIF(phrase))
    } else {
        res.status(200).json(await findGIF(keyword))
    }

})

async function findGIF(text) {

    // var limit - SETS THE MAX LIMIT OF GIFS THAT ARE RETURNED TO THE CLIENT
    var limit = 10;

    const gifResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=${limit}&q=` + text)

    let gifArray = await gifResponse.json();

    return gifArray;
}

app.listen(port, err => {

    if (err) {
        console.log('server cannot listen');
        return
    }
    console.log(`Server is listening on port ${port}`)
})