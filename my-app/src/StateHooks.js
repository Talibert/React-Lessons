// Importamos o useState para podermos utilizar os hooks de estado
// Importamos o useEffect para utilizarmos os hooks de efeito
import React, { useState, useEffect } from 'react';

function StateHooks() {
  // Declaramos uma variável de estado "count" e uma função que irá manipulá-la "setCount"
  // Atribuimos o useState a essas variáveis e indicamos que o valor inicial será zero
  const [count, setCount] = useState(0);
  const [pagUpdate, setUpdate] = useState(0);

  // O useEffect aceita dois parâmetros: O que vai acontecer e o quando vai acontencer. Nesse caso, iremos atualizar o título da página do site. Caso o segundo parâmeto esteja em branco, o useEffect será acionado a qualquer renderização do app. Se adicionarmos alguma variável, a chamada de useEffect ocorrerá apenas quando a atualização dessa variável ocorrer.
  useEffect(() => {
    document.title = `esse título mudou ${pagUpdate} vezes`
  },[pagUpdate])

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* a cada clique no botão, a função é chamada e manipula a variável */} */
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => {setCount(0); setUpdate(0);}}>
        Zerar contador e título
      </button>
      <button onClick={() => setUpdate(pagUpdate + 1)}>
        Alterações do título
      </button>
    </div>
  );
}

export default StateHooks;