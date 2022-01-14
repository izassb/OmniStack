
//utils: funções auxiliares

module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());
  //cortar a split toda vez que tiver uma vírgula
  //map percorre um array e pra cada informação que tem dentro desse vetor eu posso executar alguma coisa
  //trim remove espaçamentos antes e depois de uma string 

  //console.log(name, avatar_url, bio, github_username);
  //todas as informações pra criar um usuário(strings)
  //tecnologia não da pra buscar do github

}