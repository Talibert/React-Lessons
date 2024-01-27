import './Header.css';
import logo from "./images/logo192.png"
import Clock from "./Clock"

// Declaração do componente Header
function Header(props) {
  return (
    // Criação da div principal
    <div className="Header">
        {/*div do logo*/}
        <div className='logoArea'><img src={logo} alt="logoTeste" className="Logo"></img></div>
        {/*lista de opções do Menu*/}
        <ul className='Menu'>
                <li className='itemMenu' > <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li className='itemMenu'>Products</li>
                <li className='itemMenu'>About Us</li>
                <li className='itemMenu'>Contact</li>
        </ul>
        {/* Recebendo o props do App*/}
        <div>
          <p className="propsTest">{props.teste}</p>
          <Clock/>
        </div>
        
    </div>
  );
}

export default Header;