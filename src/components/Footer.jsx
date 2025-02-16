import "../css/Footer.css";
import ReseauSociaux from "./composants/ReseauSociaux";

function Footer() {
    return (
        <section className="section_footer">

            <img src="./assets/img/logo.png" alt="" />

            <div className="div_footer">
                <div className="div_mode">
                    <a href="https://www.linkedin.com/in/amdy-mustafa/">
                        <i className=" icone_mode fa-solid fa-moon icon--dark"></i>
                    </a>
                </div>
                    <ReseauSociaux/>
                <div className="petit_text">
                    © 2025 Amdy Mustafa
                </div>
            </div>
        </section>
    );
}

export default Footer;
