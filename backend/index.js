const { response } = require('express');
const express = require('express'); 
//importar express dentro da variável express
//criação de rotas(express)

const app = express();
//função express
//localhost:3333

//MÉTODOS HTTP 
//GET(buscando/receber informação-listar usuários/recurso: produto, contato, endereço; buscar um usuário)
//POST(criar informação-salvar um produto/cadastrar um usuário) 
//PUT(editar usuário/recurso da minha aplicação)
//DELETE(deletar)

//Tipos de parâmetros(dentro do express):
//Query Params: utilizados na maioria das vezes no método get(nao aceita corpo); visíveis na URL; request.query - como acessar - (Filtros, ordenação, paginação, ...)
//Route Params: utilizados nos métodos put e delete; não tem nome; request.params - como acessar - (identificar um recuso na alteração ou remoção)
//Body: 


app.delete('/users/:id', (request, response) => {
  console.log(request.params.id)
  return response.json({message:'Hello OmiStack'});
//função requisição -frontend e resposta (rota)
//texto como resposta
//json:comunicação back e front (objeto)
//console.log = debug dentro do node/acessar parâmetros
});
//sem nenhuma rota (/)

app.listen(3333);
//porta do local host