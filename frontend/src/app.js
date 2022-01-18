
import React from "react"; 

import './global.css'; 
import './app.css'; 
import './sidebar.css'; 

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
  //componente: App

  //const [counter, setCounter] = useState(0);
  
  // []desestruturação
  //let counter = 0;
  //let e nao const pq vai mudar o valor 

  //function incrementCounter() {
    //setCounter(counter + 1);
  //}
  //toda função que é propria de um componente a gente cria ela dentro dele mesmo
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
        
          </div>
        
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

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