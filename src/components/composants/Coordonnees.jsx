

import "../../css/composants/Coordonnees.css";

function Coordonnees({ titre, Valeur, icone_class }) {
  return (
    <div className="coordonnee">
      <div>
        <h3>{titre}</h3>
        <p>{Valeur}</p>
      </div>
      <i className={icone_class}></i>
    </div>
  );
}

export default Coordonnees;