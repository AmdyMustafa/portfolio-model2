import React, { useState, useEffect } from 'react';
import "../css/Header.css";

// Fonction pour détecter la taille de la fenêtre et mettre à jour l'état du menu
function useMenuVisibility() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        // Détecte la largeur de la fenêtre à chaque changement de taille
        const handleResize = () => {
            if (window.innerWidth >= 850) {
                setIsMenuVisible(true);  // Affiche le menu si la largeur est >= 850px
            } else {
                setIsMenuVisible(false); // Cache le menu sur les petits écrans
            }
        };

        // Appeler au début et à chaque redimensionnement de la fenêtre
        handleResize();
        window.addEventListener('resize', handleResize);

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMenuVisible, setIsMenuVisible };  // Retourne les deux valeurs
}

function Header({ activeSection, isAtTop }) {
    const { isMenuVisible, setIsMenuVisible } = useMenuVisibility();  // Destructuration pour obtenir les deux valeurs

    return (
        <nav className="barre_entete" id="mainNav" style={{
            fontSize: isAtTop ? '40px' : '30px',
            height: isAtTop ? 'auto' : 'auto',
            transition: 'font-size 0.3s ease-in-out, height 0.3s ease-in-out'
        }}>
            <a className="titre" href="#section_head">
                PORTFOLIO
            </a>

            {/* Afficher le bouton de menu si la largeur de la fenêtre est inférieure à 850px */}
            {window.innerWidth < 850 && (
                <button className="button_menu" onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
            )}

            {/* Affiche le menu si la fenêtre est large ou si le menu est visible sur les petits écrans */}
            <div 
                id="menu" 
                style={{
                    maxHeight: isMenuVisible ? '500px' : '0px', // Utilise maxHeight pour animer
                    overflow: 'hidden',                        // Cache tout ce qui dépasse
                    transition: 'max-height 0.5s ease-in-out', // Animation fluide de max-height
                   }}
            >
                <a href="#section_head" className={activeSection === 'section_projets' ? 'active' : ''}>Projects</a>
                <a href="#section_projets" className={activeSection === 'section_about' ? 'active' : ''}>About</a>
                <a href="#section_contacts" className={activeSection === 'section_contacts' ? 'active' : ''}>Contacts</a>
            </div>
        </nav>
    );
}

export default Header;
