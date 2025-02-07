import "../../css/composants/Titre.css";

function Titre({ titre1, titre2 }) {
    return (
        <h2>{titre1} <span>{titre2}</span></h2>
    );
}

export default Titre;