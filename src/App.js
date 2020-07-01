import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <h2>Resultado</h2>
    <div class="corpo">
        <div class="curso">
            <img src="http://files.cod3r.com.br/curso-web/curso1.jpg" />
            <div class="curso-info">
                <h4>Docker: Ferramenta essencial para Desenvolvedores</h4>
                <p>Prof. Fulano</p>
            </div>
            <div class="curso-preco">
                <span class="preco-de">R$80,00</span>
                <span class="preco-por">R$50,00</span>
            </div>
        </div>
        <div class="curso">
            <img src="http://files.cod3r.com.br/curso-web/curso2.jpg" />
            <div class="curso-info">
                <h4>Web Moderno com Javascript + Projetos</h4>
                <p>Prof. Sicrano Filho</p>
            </div>
            <div class="curso-preco">
                <span class="preco-de">R$80,00</span>
                <span class="preco-por">R$50,00</span>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
