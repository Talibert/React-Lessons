import './Header.css';
import logo from "./images/logo192.png"

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
        <p className="propsTest">{props.teste}</p>
    </div>
  );
}

export default Header;