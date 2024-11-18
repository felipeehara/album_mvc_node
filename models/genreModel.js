const fs = require('fs');
const path = require('path');

const genresFilePath = path.join(__dirname, '../data/genres.json');

function getAllGenres() {
    const data = fs.readFileSync(genresFilePath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    getAllGenres
};
