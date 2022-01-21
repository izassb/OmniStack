
import React, { useState, useEffect } from "react"; 
import api from './services/api';

import './global.css'; 
import './app.css'
import './sidebar.css'; 
import './main.css'; 

import DevForm from "./componentes/DevForm";
import DevItem from "./componentes/DevItem";

//{ useState } 
//useState: funçao criada pelo react p usar um estado

// Componente: função que retorna algum conteúdo html/css/js (propriedades da página independentes - propriedades repetitivas) 
// Bloco isolado de html, css e js; o qual não interfere no restante da aplicação 
// colocar cada componente em uma página, importar react e exportar o componente
// função SEMPRE com a letra maiuscula 

// Estado: informação que o componente vai manipular
//Informações mantidas pelo componente(imutabilidade)

// Propriedade: passar atributo pra um componente no react (titulo - header)
// informações que um componente PAI passa para o componente filho


//import Header from "./header";

function App() {
const [devs, setDevs] = useState([]);
  //use effect serve para dispararmos uma função toda vez que uma informação alterar 
  // recebe dois parâmetros: qual funçao executar, quando executar
  
  //componente: App

  //const [counter, setCounter] = useState(0);
  
  // []desestruturação
  //let counter = 0;
  //let e nao const pq vai mudar o valor 

  //function incrementCounter() {
    //setCounter(counter + 1);
  //}
  //toda função que é propria de um componente a gente cria ela dentro dele mesmo
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (
            //mesma coisa de {return()}
              <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>

    //aside(sidebar)
    //main(conteudo principal da aplicação)
    //<>
      //<h1>Contador: {counter}</h1>
      //<button onClick={incrementCounter}>Incrementar</button>
    //</>
    //variavel sendo utilizada no contador 
    //fragment"
  );

}

//global.css : estilizaçoes globais que eu quero que aplique em todo meu projeto
//app.css : css de estilização diretamente do app.js

export default App;