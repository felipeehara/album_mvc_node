const artistModel = require('../models/artistModel');
const fs = require('fs');
const path = require('path');

function addArtistForm(req, res) {
    res.render('addArtist');
}

function addArtist(req, res) {
    const { name, genre, discs } = req.body;
    const newArtist = { name, genre, discs: discs.split(',') };
    artistModel.addArtist(newArtist);
    res.redirect('/');
}

module.exports = {
    addArtistForm,
    addArtist
};
