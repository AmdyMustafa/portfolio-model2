import "../css/Projets.css";
import React, { useState } from 'react';
import Modal from './Modal';
import Titre from "./composants/Titre";

const projets = [
  {
    titre: "Calculatrice",
    technologie: ["React Js", "JavaScript"],
    description: "Développement d'une calculatrice complète avec React et JavaScript, gérant les opérations basiques et les événements utilisateur.",
    image: "./assets/projets-image/calculatrice.png",
    lien: "https://github.com/AmdyMustafa/Calculatrice"
  },
  {
    titre: "Quote Machine",
    technologie: ["React Js", "JavaScript","Animation"],
    description: "Application React générant des citations aléatoires en temps réel via une API externe, avec partage sur les réseaux sociaux.",
    image: "./assets/projets-image/citation.png",
    lien: "https://github.com/AmdyMustafa/CitationAleatoire"
  },
  {
    titre: "Drum Machine",
    technologie: ["SEO","React Js", "JavaScript"],
    description: "Création d'une boîte à rythmes interactive en React, réagissant aux touches du clavier avec animations CSS et gestion audio.",
    image: "./assets/projets-image/drum-machine.png",
    lien: "https://github.com/AmdyMustafa/DrumMachine"
  },
  {
    titre: "Markdown Previewer",
    technologie: ["React Js", "JavaScript"],
    description: "Éditeur Markdown en React avec conversion en temps réel via marked.js et synchronisation instantanée entre l’éditeur et l’aperçu.",
    image: "./assets/projets-image/previsualisation.png",
    lien: "https://github.com/AmdyMustafa/Markdown"
  },
  {
    titre: "25 + 5 Clock",
    technologie: ["React Js", "JavaScript"],
    description: "Minuteur React gérant cycles de travail et pauses avec setInterval, transitions visuelles et gestion efficace des événements.",
    image: "./assets/projets-image/horloge.png",
    lien: "https://github.com/AmdyMustafa/Clock"
  }
];

function Projets() {
  const [modalOpen, setModalOpen] = useState(null);

  return (
    <section className="section_projet">
      <Titre titre1="PROJETS" titre2="Réalisation" />
      <div className="project-wrap">
        {projets.map((projet, index) => (
          <ProjetDiv key={index} projet={projet} onClick={() => setModalOpen(index)} />
        ))}
      </div>

      {modalOpen !== null && (
        <Modal
          isOpen={true}
          onClose={() => setModalOpen(null)}
          titre={projets[modalOpen].titre}
          src={projets[modalOpen].image}
          desciption={projets[modalOpen].description}
          technologie={projets[modalOpen].technologie}
        />
      )}
    </section>
  );
}

function ProjetDiv({ projet, onClick }) {
  return (
    <div className="projet_div" onClick={onClick}>
      <img className="image_projet" src={projet.image} alt={projet.titre} />
      <div className="projet_div_footer">
        <p className="titre_projet">{projet.titre}</p>
        <p className="technologies">
          {projet.technologie.join(", ")}
        </p>
        <div className="div_patager">
          <a onClick={onClick} title="Voir les détails" className="icone_a">
            <i className="icone_i fa-solid fa-circle-plus"></i>
          </a>
          <a href={projet.lien} className="icone_a" target="_blank" title="Voir sur GitHub" onClick={(e) => e.stopPropagation()}>
            <i className="icone_i fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projets;