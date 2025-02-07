import "../css/Competences.css";
import Titre from "./composants/Titre";

function Competences() {
return (
<section className="section_competences">
    
    <Titre titre1="COMPETENCES" titre2="Savoir Faire"/>
            
    <div className="competence-wrap">

        <Competence_div text="HTML" src="./assets/competences-image/html-5.png"/>

        <Competence_div text="SASS" src="./assets/competences-image/sass.png" />

        <Competence_div text="JAVASCRIPT" src="./assets/competences-image/javascript.png"
            background="rgb(19,15,15)" />

        <Competence_div text="REACT" src="./assets/competences-image/react.png" />

        <Competence_div text="REDUX" src="./assets/competences-image/redux.png" />

    </div>
</section>
);
}
function Competence_div({ text, src, background }) {
return (
<div className="competence_div">
    <div className="competence_cadre" style={{ backgroundColor: 'rgb(215, 216, 219)' }}>
        <img className="image_competence" src={src} alt="" />
    </div>
    <div className="competence_div_pointer">
        {text}
    </div>
</div>
);
}
export default Competences;