import "../css/Projets.css";
import React, { useState } from 'react';
import Modal from './Modal';

function Projets() {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
    setModalOpen(null);
  };
  return (
    <section className="section_projet">
      <h2 >PORTFOLIO</h2>
      {/* Icon Divider*/}
      <div className="lines-star">
        <div className="line"></div>
        <div><i className="fas fa-star"></i></div>
        <div className="line"></div>
      </div>
      <div className="project-wrap">

        <Projet_div src="src/assets/projets-image/calculatrice.png" background="rgb(186,76,99)" onClick={() => openModal(1)} />

        <Projet_div src="src/assets/projets-image/citation.png" background="rgb(31,164,182)" onClick={() => openModal(2)} />

        <Projet_div src="src/assets/projets-image/drum-machine.png" background="rgb(19,15,15)" onClick={() => openModal(3)} />

        <Projet_div src="src/assets/projets-image/horloge.png" background="rgb(29,131,193)" onClick={() => openModal(4)} />

        <Projet_div src="src/assets/projets-image/previsualisation.png" background="rgb(16,55,181)" onClick={() => openModal(5)} />

        {/*rgb(204,178,163)*/}

      </div>

      {modalOpen === 1 && 
      <Modal 
      isOpen={true} 
      onClose={closeModal} 
      titre="CALCULATRICE" 
      src="src/assets/projets-image/calculatrice.png" 
      desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ut at voluptates, quisquam cupiditate est cum? Exercitationem voluptas corporis consequuntur veritatis quisquam voluptatibus ratione! Fugit soluta nobis ab a?"
      />}
      {/*
      {modalOpen === 2 && <Modal2 isOpen={true} onClose={closeModal} />}
      {modalOpen === 3 && <Modal3 isOpen={true} onClose={closeModal} />}
      {modalOpen === 4 && <Modal4 isOpen={true} onClose={closeModal} />}
      {modalOpen === 5 && <Modal5 isOpen={true} onClose={closeModal} />}
      / */}
    </section>
  );
}
function Projet_div({ src, background, onClick }) {
  return (
    <div className="projet_div" onClick={onClick}>
      <div className="projet_cadre" style={{ backgroundColor: background }}>
        <img className="immage_projet" src={src} alt="" />
      </div>
      <div className="projet_div_pointer">
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
}
export default Projets;

