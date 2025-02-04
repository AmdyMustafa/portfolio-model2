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
                        <a href="www.linkedin.com/in/amdy-mustafa" className="icone_a" target="_blanc">
                            <i className="icone_i fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/AmdyMustafa" className="icone_a" target="_blanc">
                            <i className="icone_i fab fa-github"></i>
                        </a></div>
                </div>

                {/* Footer About Text */}
                <div className="div_footer">
                    <h4>About Freelancer</h4>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by
                    </p>
                </div>
            </footer>

            {/* Copyright Section */}
            <div>
                <small>Copyright &copy; Your Website 2023</small>
            </div>
        </section>
    );
}

export default Footer;
