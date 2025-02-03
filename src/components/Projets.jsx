import "../css/Projets.css";

function Projets() {
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

        <Projet_div src="src/assets/projets-image/calculatrice.png" background="rgb(186,76,99)" />

        <Projet_div src="src/assets/projets-image/citation.png" background="rgb(31,164,182)" />

        <Projet_div src="src/assets/projets-image/drum-machine.png" background="rgb(19,15,15)" />

        <Projet_div src="src/assets/projets-image/horloge.png" background="rgb(29,131,193)" />

        <Projet_div src="src/assets/projets-image/previsualisation.png" background="rgb(16,55,181)" />

        {/*rgb(204,178,163)*/}

      </div>
    </section>
  );
}
function Projet_div({ src, background }) {
  return (
    <div className="projet_div">
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

