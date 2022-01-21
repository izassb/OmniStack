//API restful
const express = require('express'); 
//importar express dentro da variável express
//criação de rotas(express)

const mongoose = require('mongoose');
//biblioteca que vai dar acesso do node dentro da base de dados mongo

const cors = require('cors');

const routes = require('./routes')
//importando e puxando arquivo

const app = express();
//função express
//localhost:3333

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.0gxl3.mongodb.net/week10?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());
//cadastrei dentro do express pra ele entender requisições que tem o corpo no formato json
//precisa vir antes das rotas

app.use(routes);

//MÉTODOS HTTP 
//GET(buscando/receber informação-listar usuários/recurso: produto, contato, endereço; buscar um usuário)
//POST(criar informação-salvar um produto/cadastrar um usuário) 
//PUT(editar usuário/recurso da minha aplicação)
//DELETE(deletar)

//Tipos de parâmetros(dentro do express):
//Query Params: utilizados na maioria das vezes no método get(nao aceita corpo); visíveis na URL; request.query - como acessar - (Filtros, ordenação, paginação, ...)
//Route Params: utilizados nos métodos put e delete; não tem nome; request.params - como acessar - (identificar um recuso na alteração ou remoção)
//Body: utilizados nos métodos post e put; corpo da requisição; request.body (Dados para criação ou alteração de um registro)

//MongoDB (banco Não-relacional)

app.listen(3333);
//porta do local host