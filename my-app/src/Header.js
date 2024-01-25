import './Header.css';

// Declaração do componente Header
function Header(props) {
  return (
    // Criação da div principal
    <div className="Header">
        {/*div do logo*/}
        <div className='Logo'>logo</div>
        {/*lista de opções do Menu*/}
        <ul className='Menu'>
                <li className='Item-Menu'>Home</li>
                <li className='Item-Menu'>Products</li>
                <li className='Item-Menu'>About Us</li>
                <li className='Item-Menu'>Contact</li>
        </ul>
        {/* Recebendo o props do App*/}
        <p>{props.teste}</p>
    </div>
  );
}

export default Header;