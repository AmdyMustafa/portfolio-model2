// Header.jsx
import "../css/Header.css";

function Header({ activeSection, isAtTop }) {
    return (
        <nav className="barre_entete" id="mainNav" style={{ height: isAtTop ? '100px' : '70px', transition: 'height 0.3s' }}>
            <a className="titre" href="#section_head" style={{ fontSize: isAtTop ? '30px' : '20px', transition: 'font-size 0.3s ease-in-out' }}>PORTFOLIO</a>

            {/*<button>
                    Menu
                    <i className="fas fa-bars"></i>
                </button>*/}
            <menu id="menu">
                <a href="#section_head" className={activeSection === 'section_head' ? 'active' : ''}>Projects</a>
                <a href="#section_projets" className={activeSection === 'section_projets' ? 'active' : ''}>About</a>
                <a href="#section_contacts" className={activeSection === 'section_contacts' ? 'active' : ''}>Contacts</a>

            </menu>

        </nav>
    );
}


export default Header;