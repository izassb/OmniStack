
import React, { useState } from "react"; 

// Componente: função que retorna algum conteúdo html/css/js (propriedades da página independentes - propriedades repetitivas) 
// Bloco isolado de html, css e js; o qual não interfere no restante da aplicação 
// colocar cada componente em uma página, importar react e exportar o componente
// função SEMPRE com a letra maiuscula 

// Estado: informação que o componente vai manipular

// Propriedade: passar atributo pra um componente no react (titulo - header)
// informações que um componente PAI passa para o componente filho


//import Header from "./header";

function App() {
  //componente: App

  const counter = useState(0);
  
  //let counter = 0;
  //let e nao const pq vai mudar o valor 

  function incrementCounter() {
    counter++;
  }
  //toda função que é propria de um componente a gente cria ela dentro dele mesmo
  
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
    //variavel sendo utilizada no contador 
    //fragment"
  );
}

export default App;