const fs = require('fs');
const path = require('path');

const artistsFilePath = path.join(__dirname, '../data/artists.json');

// Função para obter todos os artistas
function getAllArtists() {
    const data = fs.readFileSync(artistsFilePath, 'utf-8');
    return JSON.parse(data);
}

// Função para adicionar um novo artista
function addArtist(artist) {
    const artists = getAllArtists();
    artists.push(artist);  // Adiciona o novo artista à lista
    fs.writeFileSync(artistsFilePath, JSON.stringify(artists, null, 2));  // Grava a lista atualizada no arquivo
}

module.exports = {
    getAllArtists,
    addArtist
};
