// Header.jsx
import "../css/Header.css";

function Header({ activeSection }) {
    return (
        <nav className="barre_entete" id="mainNav">
            <a className="titre" href="#page-top">PORTFILIO</a>
            {/*<button>
                    Menu
                    <i className="fas fa-bars"></i>
                </button>*/}

            <ul id="menu">
                <li className={activeSection === 'section_head' ? 'active' : ''}>
                    <a href="#section_head" >Projects</a>
                </li>
                <li className={activeSection === 'section_projets' ? 'active' : ''}>
                    <a href="#section_projets">About</a>
                </li>
                <li className={activeSection === 'section_contacts' ? 'active' : ''}>
                    <a href="#section_contact">Contacts</a>
                </li>
            </ul>

        </nav>
    );
}


export default Header;