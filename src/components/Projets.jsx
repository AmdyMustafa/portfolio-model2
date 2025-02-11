import "../css/Projets.css";
import React, { useState } from 'react';
import Modal from './Modal';
import Titre from "./composants/Titre";

function Projets() {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
    setModalOpen(null);
  };
  // Les descriotion et les images des projets
  const projets = [
    [
      "Développement d'une calculatrice complète, implémentant les fonctionnalités de calcul basiques (addition, soustraction, multiplication, division) avec React et JavaScript. J’ai géré les entrées utilisateur et les résultats avec une logique claire et optimisée. Ce projet a renforcé mes compétences en gestion d’événements, en calculs en temps réel et en architecture d’application avec React et Redux.",
      "./assets/projets-image/calculatrice.png"
    ],
    [
      "Conception d’une application React pour générer des citations aléatoires, intégrant une API externe pour récupérer les données en temps réel. La gestion de l’état a été réalisée via React Hooks, et l’interface utilisateur est optimisée pour une expérience fluide, avec une fonctionnalité de partage sur les réseaux sociaux via l'API de partage Web. Ce projet a permis de démontrer ma maîtrise des requêtes HTTP, de l’asynchronisme avec fetch, et de la gestion d’état dans React.",
      "./assets/projets-image/citation.png"
    ],
    [
      "Création d’une machine à tambour interactive en utilisant React et la manipulation d’éléments HTML Audio. L’application réagit aux pressions des touches du clavier et affiche les animations correspondantes en temps réel. La gestion des événements clavier et l'optimisation de l'interface avec des animations CSS ont permis d’offrir une interaction rapide et fluide. Ce projet m’a permis d’explorer les manipulations des API Web Audio et la gestion des états complexes avec React.",
      "./assets/projets-image/drum-machine.png"
    ],
    [
      "Création d’une application de minuteur avec React, offrant une gestion dynamique des sessions de travail et de pause. L’application utilise setInterval pour la gestion du temps, avec des transitions visuelles entre les sessions. L’interface a été soigneusement conçue pour garantir une ergonomie optimale, et les événements ont été gérés de manière efficace avec les Hooks React. Ce projet m’a permis de perfectionner ma gestion des timers et des interactions utilisateur en temps réel.",
      "./assets/projets-image/horloge.png"
    ],
    [
      "Développement d'un éditeur Markdown avec React, permettant une conversion en temps réel de syntaxe markdown en HTML. L’utilisation de la librairie marked.js pour le rendu dynamique et l’intégration des événements onChange pour la synchronisation immédiate entre l’éditeur et le previewer a permis de créer une expérience utilisateur réactive. Ce projet a approfondi mes compétences en gestion d’interfaces dynamiques et en manipulation de données utilisateur.",
      "./assets/projets-image/previsualisation.png"
    ]
  ];

  return (
    <section className="section_projet">
      <Titre titre1="PROJETS" titre2="Réalisation" />
      <div className="project-wrap">

        <Projet_div src={projets[0][1]} titre_projet="Calculatrice" technologies="React Js" onClick={() => openModal(1)} />

        <Projet_div src={projets[1][1]}  titre_projet="Quote Machine" technologies="JavaScript" onClick={() => openModal(2)} />

        <Projet_div src={projets[2][1]}  titre_projet="Drum Machine" technologies="JavaScript"   onClick={() => openModal(3)} />

        <Projet_div src={projets[4][1]}   titre_projet="Markdown Previewer" technologies="JavaScript"  onClick={() => openModal(5)} />

        <Projet_div src={projets[3][1]}  titre_projet="25 + 5 Clock" technologies="JavaScript"  onClick={() => openModal(4)} />

        
      </div>

      {modalOpen === 1 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Calculatrice"
          src={projets[0][1]}
          desciption={projets[0][0]}
        />
      }
      {modalOpen === 2 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Random Quote Machine"
          src={projets[1][1]}
          desciption={projets[1][0]}
        />
      }
      {modalOpen === 3 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Drum Machine"
          src={projets[2][1]}
          desciption={projets[2][0]}
        />
      }
      {modalOpen === 4 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="25 + 5 Clock"
          src={projets[3][1]}
          desciption={projets[3][0]}
        />
      }
      {modalOpen === 5 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Markdown Previewer"
          src={projets[4][1]}
          desciption={projets[4][0]}
        />
      }
    </section>
  );
}
function Projet_div({ titre_projet, technologies, src, onClick }) {
  return (
    <div className="projet_div" onClick={onClick}>
      <img className="image_projet" src={src} alt="" />
      <div className="projet_div_footer">
        <p className="titre_projet">{titre_projet}</p>
        <p className="technologies">{technologies}</p>
        <div className="div_patager">
        <a href="" title="Voir les détails" className="icone_a">
            <i className="icone_i fa-solid fa-circle-plus"></i>
          </a>
          <a href="https://github.com/AmdyMustafa" className="icone_a" target="_blank" title="Retrouver le projet sur github">
            <i className="icone_i fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projets;

