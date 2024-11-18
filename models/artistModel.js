const fs = require('fs');
const path = require('path');

const artistsFilePath = path.join(__dirname, '../data/artists.json');

function getAllArtists() {
    const data = fs.readFileSync(artistsFilePath, 'utf-8');
    return JSON.parse(data);
}

function addArtist(artist) {
    const artists = getAllArtists();
    artists.push(artist);
    fs.writeFileSync(artistsFilePath, JSON.stringify(artists, null, 2));
}

module.exports = {
    getAllArtists,
    addArtist
};
