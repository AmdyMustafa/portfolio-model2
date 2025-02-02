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
            <menu id="menu">
                <a href="#section_head" className={activeSection === 'section_head' ? 'active' : ''}>Projects</a>
                <a href="#section_projets" className={activeSection === 'section_projets' ? 'active' : ''}>About</a>
                <a href="#section_contact" className={activeSection === 'section_contacts' ? 'active' : ''}>Contacts</a>

            </menu>

        </nav>
    );
}


export default Header;