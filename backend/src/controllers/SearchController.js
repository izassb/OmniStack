
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
  //buscar todos devs num raio 10km
  //filtrar por tecnologias 

  const { latitude, longitude, techs } = request.query;

  const techsArray = parseStringAsArray(techs); 

  const devs = await Dev.find({
    //filtros com objeto
    techs: {
      $in: techsArray,
      //operador do mongo
      //selecionar devs que trabalham somente naquela tecnologia
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point', 
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000,
      },
    },
  });

  //console.log(techsArray);

  return response.json({ devs });
  }
}
