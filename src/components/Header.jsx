// Header.jsx
import "../css/Header.css";

function Header() {
  return (
        <nav className="barre_entete" id="mainNav">
                <a className="titre" href="#page-top">PORTFILIO</a>
                {/*<button>
                    Menu
                    <i className="fas fa-bars"></i>
                </button>*/}
                
                    <ul id="menu">
                        <li ><a href="#portfolio">Projets</a></li>
                        <li ><a href="#about">About</a></li>
                        <li ><a href="#contact">Contact</a></li>
                    </ul>
                
        </nav>
  );
}


export default Header;