import "../css/Footer.css";

function Footer() {
    return (
        <section className="section_footer">
            <footer className="footer">
                {/* Footer Location */}
                <div className="div_footer">
                    <h4>Localisation</h4>
                    <p>
                        Lyon
                        <br />
                        69000 France
                    </p>
                </div>

                {/* Footer Social Icons */}
                <div className="div_footer">
                    <h4>Me retrouver</h4>
                    <div className="div_patager">
                        <a href="https://www.linkedin.com/in/amdy-mustafa/" className="icone_a" target="_blanc">
                            <i className="icone_i fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/AmdyMustafa" className="icone_a" target="_blanc">
                            <i className="icone_i fab fa-github"></i>
                        </a></div>
                </div>

                {/* Footer About Text */}
                <div className="div_footer">
                    <img src="./assets/img/logo.png" alt=""/>
                    </div>
            </footer>

            {/* Copyright Section */}
            <p className="copyright">Copyright Amdy Mustafa 2025</p>
        </section>
    );
}

export default Footer;
