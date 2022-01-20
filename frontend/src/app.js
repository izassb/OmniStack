
import React, { useState, useEffect } from "react"; 

import './global.css'; 
import './app.css'
import './sidebar.css'; 
import './main.css'; 

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
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
    //vetor vazio: funçao executa uma unica vez
  }, []);
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
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">github_usernameTecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e =>setLatitude(e.target.value)}
            />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e =>setLongitude(e.target.value)}
            />
            </div>
        
          </div>
        
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/95218427?v=4" alt="Izabelly Santana" />
              <div className="user-info">
                <strong>Izabelly Santana</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedora na @citiupfe. Apaixonada por programação e pelas melhores tecnologias para desenvolvimento web e mobile.</p>
            <a href="https://github.com/izassb">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/95218427?v=4" alt="Izabelly Santana" />
              <div className="user-info">
                <strong>Izabelly Santana</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedora na @citiupfe. Apaixonada por programação e pelas melhores tecnologias para desenvolvimento web e mobile.</p>
            <a href="https://github.com/izassb">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/95218427?v=4" alt="Izabelly Santana" />
              <div className="user-info">
                <strong>Izabelly Santana</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedora na @citiupfe. Apaixonada por programação e pelas melhores tecnologias para desenvolvimento web e mobile.</p>
            <a href="https://github.com/izassb">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/95218427?v=4" alt="Izabelly Santana" />
              <div className="user-info">
                <strong>Izabelly Santana</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedora na @citiupfe. Apaixonada por programação e pelas melhores tecnologias para desenvolvimento web e mobile.</p>
            <a href="https://github.com/izassb">Acessar perfil no Github</a>
          </li>
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