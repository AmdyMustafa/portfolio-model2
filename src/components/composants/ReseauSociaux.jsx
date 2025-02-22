import "../../css/composants/ReseauSociaux.css";

function ReseauSociaux() {
    return (
        <div className="div_reseau">
                <a href="https://www.linkedin.com/in/amdy-mustafa/" className="icone_a" target="_blank" title="Me retrouver sur LinkedIn">
                    <i className="icone_i fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/AmdyMustafa" className="icone_a" target="_blank" title="Me retrouver sur github">
                    <i className="icone_i fab fa-github"></i>
                </a>
                <a href="mailto:amoustapha.niang@example.com" className="icone_a" target="_blank" title="Me contacter par mail">
                    <i className="icone_i fa fa-envelope"></i>
                </a>
                <a href="./document/CV.pdf" className="icone_a" target="_blank" title="Télécharger mon CV">
                    <i className="icone_i fas fa-file-pdf"></i>
                </a>
            </div>
    );
}

export default ReseauSociaux;