const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const artistController = require('./controllers/artistController');
const discController = require('./controllers/discController');
const genreController = require('./controllers/genreController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => res.render('home'));
app.get('/discs', discController.listDiscs);
app.get('/discs/add', discController.addDiscForm);
app.post('/discs/add', discController.addDisc);
app.get('/artists/add', artistController.addArtistForm);
app.post('/artists/add', artistController.addArtist);
app.get('/artists', artistController.viewArtists);  // Rota para ver artistas
app.get('/genres', genreController.listGenres);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
