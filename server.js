const express = require('express');
const app = express();
const ShortUrl = require('./models/shortUrl');
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urlShortner', {
    useNewUrlParser: true, useUnifiedTopology: true
});

app.get('/', async (req, res) => {
    const shorturls = await ShortUrl.find();
    res.render('index', { shorturls: shorturls });
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullURL });
    res.redirect('/');
})

app.get('/:shorturl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shorturl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++;
    shortUrl.save()

    res.redirect(shortUrl.full);
})

app.listen(process.env.PORT || 5000);