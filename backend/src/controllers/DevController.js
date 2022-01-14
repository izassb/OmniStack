
//CONTROLLERS: vai ser responsável por receber a requisição, ativar o que precisa fazer e devolver uma resposta
// index(lista do recurso), show(único desenvolvedor), store(criar), update(alterar), destroy(deletar) 

const axios = require('axios');
const Dev = require('../models/Dev');
//cadastrando nosso desenvolvedor
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();
      //()filtroseparametros 

      return response.json(devs)
  },

  async store(request, response) {
    //async quer dizer que a função pode demorar pra responder
  
    const { github_username, techs, latitude, longitude } = (request.body);

    let dev = await Dev.findOne({ github_username });
    //evitando que o usuário se repita
    //encontrar UM dev baseado no github username 
    //variável let pode ser sobreposta

    if(!dev) {
      //se esse dev nao existir 
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      //chamada a api do github
      //await : continuar
    
      const { name = login, avatar_url, bio } = (apiResponse.data);
      //dados da minha resposta axios
      //desestruturação console.log em const pra so buscar o que eu quero 
    
      //if(!name) {
        //name = apiResponse.data.login;
      //}
      //se o nome não existir eu quero o login(variável)
      //name = login 
    
      const techsArray = parseStringAsArray(techs);
      //converter as techs que tao separadas por vírgula em um array
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_username, //short sintaxe
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }
  
    return response.json(dev);
  //função requisição -frontend e resposta (rota)
  //texto como resposta
  //json:comunicação back e front (objeto)
  //console.log = debug dentro do node/acessar parâmetros
  //retornar os dados do dev que foi recem cadastrado dentro do banco de dados
  }
  //sem nenhuma rota (/)
};