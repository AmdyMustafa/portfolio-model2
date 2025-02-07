import "../css/About.css";
import Titre from "./composants/Titre";

function About() {
    return (
        <section className="section_about">
            <Titre titre1="A PROPOS" titre2="Qui suis-je"/>
            <div className="text_about">
                <p>
                    Développeur front-end passionné, je combine expertise technique et créativité pour créer des expériences web interactives et performantes. 
                    Maîtrisant des technologies telles que JavaScript, React et jQuery, je m'efforce de concevoir des interfaces dynamiques, modernes et intuitives, adaptées aux besoins des utilisateurs. Mon objectif est toujours de proposer des solutions innovantes tout en assurant la qualité et la fluidité de l'expérience utilisateur.
                </p>
                <p>
                    J'ai également une solide maîtrise de HTML5, CSS3, et des outils comme Redux.js pour la gestion de l'état des applications React, ainsi que SASS pour une gestion optimisée des styles. 
                    Grâce à l'utilisation de frameworks comme Bootstrap, je développe des interfaces cohérentes et responsive, offrant une expérience fluide et performante sur tous les appareils. Mon approche de l'intégration web me permet de livrer des projets soignés, évolutifs et parfaitement adaptés aux besoins spécifiques des utilisateurs.
                </p>


            </div>
        </section>
    );
}

export default About;

