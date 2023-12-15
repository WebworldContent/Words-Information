import express from 'express';
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials:true,
    origin: 'https://words-information-front.vercel.app',
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/api/quotes', async (req, res, next) => {
    try {
        const resp = await fetch('https://zenquotes.io/api/random');
        const data = await resp.json();
        res.status(200).send({
            data: data[0].q
        })
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.get('/api/word', async (req, res, next) => {
    try {
        const resp = await fetch('https://random-word-api.vercel.app/api?words=1');
        const data = await resp.json();
        console.log(data[0]);
        res.status(200).send({word: data[0] ?? ''})
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/api/meaning/:word', async (req, res, next) => {
    try {
        const { word } = req.params;
        const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await resp.json();
        console.log(data[0]);
        res.status(200).send(data[0] ?? {});
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));