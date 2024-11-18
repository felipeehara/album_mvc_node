const discModel = require('../models/discModel');
const fs = require('fs');
const path = require('path');

function listDiscs(req, res) {
    const discs = discModel.getAllDiscs();
    res.render('listDiscs', { discs });
}

function addDiscForm(req, res) {
    res.render('addDisc');
}

function addDisc(req, res) {
    const { title, year, tracks, genre, coverImage } = req.body;
    const newDisc = {
        title,
        year,
        tracks: tracks.split(','),
        genre,
        coverImage: coverImage // Salvar a imagem de capa
    };
    discModel.addDisc(newDisc);
    res.redirect('/discs');
}

module.exports = {
    listDiscs,
    addDiscForm,
    addDisc
};
