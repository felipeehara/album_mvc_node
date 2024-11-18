const genreModel = require('../models/genreModel');

function listGenres(req, res) {
    const genres = genreModel.getAllGenres();
    res.render('listGenres', { genres });
}

module.exports = {
    listGenres
};
