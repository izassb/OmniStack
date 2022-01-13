
const mongoose = require('mongoose');
//informar pro mongoose qual que é o formato que o dev vai ter dentro da nossa base de dados
//nome? descrição? email?

const DevSchema = new mongoose.Schema({
name: String,
github_username: String,
bio: String,
avatar_url: String, 
techs: [String],
//array ou vetor de strings 
//+ de uma tecnologia/strinh
});
//definindo uma variável
//estruturação de uma entidade dentro de um banco de dados

module.exports = mongoose.model('Dev', DevSchema)