import logo from '../../assets/images/logo/Marvel.svg';

function Header() {
    return (
      <header>
        <img className="center logo marvel" src={logo} alt="Logo" />
        <h1 className="text-center">Explore o universo</h1>
        <p className="text-center">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - 
          e aqueles que você descobrirá em breve!
        </p>
      </header>
    );
  }
  
  export default Header;
  