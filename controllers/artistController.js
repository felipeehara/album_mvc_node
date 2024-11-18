const artistModel = require('../models/artistModel');
const fs = require('fs');
const path = require('path');

// Função para renderizar o formulário de adicionar artista
function addArtistForm(req, res) {
    res.render('addArtist');
}

// Função para adicionar um novo artista
function addArtist(req, res) {
    const { name, genre, discs } = req.body;
    const newArtist = { name, genre, discs: discs.split(',') };
    artistModel.addArtist(newArtist);
    res.redirect('/');  // Redireciona para a página inicial após adicionar
}

// Função para listar todos os artistas
function viewArtists(req, res) {
    try {
        const artists = artistModel.getAllArtists();  // Obtém todos os artistas
        res.render('viewArtists', { artists });  // Renderiza a view com a lista de artistas
    } catch (error) {
        console.error("Erro ao carregar artistas:", error);
        res.status(500).send("Erro ao carregar artistas.");
    }
}


module.exports = {
    addArtistForm,
    addArtist,
    viewArtists  // Exporta a função viewArtists
};
