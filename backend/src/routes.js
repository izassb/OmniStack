const { Router } = require('express');
//importando modulo de roteamento do proprio express
const axios = require('axios');

const routes = Router();
//variavel routes + funçao router

routes.post('/devs', async (request, response) => {
  //async quer dizer que a função pode demorar pra responder

  const { github_username } = (request.body);
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  //chamada a api do github
  //await : continuar

  const { name = login, avatar_url, bio } = (apiResponse.data);
  //dados da minha resposta axios
  //desestruturação console.log em const pra so buscar o que eu quero 

  //if(!name) {
    //name = apiResponse.data.login;
  //}
  //se o nome não existir eu quero o login(variávek)

  return response.json({message:'Hello OmniStack'});
//função requisição -frontend e resposta (rota)
//texto como resposta
//json:comunicação back e front (objeto)
//console.log = debug dentro do node/acessar parâmetros
});
//sem nenhuma rota (/)

module.exports = routes;
//exportando o routes


