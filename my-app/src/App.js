import './App.css';
import Header from './Header';

function App(props) {
  return (
    <div className="App">
        {/* Quando importarmos outro componente, o conteúdo do props deve ser passado aqui, pois App é o pai de Header */}
        <Header teste="teste props"/>
        <p>
          Teste de props: {props.texto}
        </p>
    </div>
  );
}

export default App;
