
import React from "react"; 
//importa o React em todo arquivo js que for utilizar html dentro dele 
//utilizado no browser para react-dom
//padrao aplicação react 

import ReactDOM from "react-dom";
//da ao react a habilidade de se comunicar com a árvore de elementos da nossa aplicação, como html
//arvore de elementos = header body etcetc
//mobile REACTNATIVE
//utilizado no browser para react-dom (varia em cada ambiente)
//padrao aplicação react 

import App from './app';
//padrao aplicação react 

ReactDOM.render(<App />, document.getElementById('root')); 
//reactdom mandando renderizar 
//padrao aplicação react 
//injetando app dentro da root

// JSX(JavaScript + HTML)
// XML sintaxe do html