import './App.css';
import Header from './Header';
import StateHooks from  "./StateHooks";
import Api from "./Api";
import { useEffect, useState } from 'react';

function App(props) {
  const [nomes, setNomes] = useState([{}]);
  // Função async que irá iniciar a API e pegar os dados
  async function initApi(){
    // Chama a função da API que irá pegar os nomes e armazena em uma variável
    let pegaNomes = await Api.getPersons();
    // console.log para fins de teste
    console.log(pegaNomes);
    // Passa essa variável como argumento para a função setNomes
    setNomes(pegaNomes);
  }

  // useEffect é utilizado para chamar a função que irá iniciar a API
  useEffect(()=>{
    initApi()
  },[])

  return (
    <div className="App">
        {/* Quando importarmos outro componente, o conteúdo do props deve ser passado aqui, pois App é o pai de Header */}
        <Header teste="teste props"/>
        <p>
          Teste de props: {props.texto}
        </p>
        <div>
          os nomes são:
          {/* Mapeando o array 'nomes' para criar elementos JSX */}
          {nomes.map((data) => (
            <div key={data.id}>
              {/* Renderizando o nome e o email de cada objeto 'data' */}
              {data.name} | {data.email}
            </div>
          ))}
        </div>
        <StateHooks/>
    </div>
  );
}

export default App;
