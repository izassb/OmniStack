const { Router } = require('express');
//importando modulo de roteamento do proprio express

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();
//variavel routes + funçao router

routes.get('/devs', DevController.index)
//rota de listagem de devs

routes.post('/devs', DevController.store);
//rota de criação de um dev

routes.get('/search', SearchController.index);

module.exports = routes;
//exportando o routes


