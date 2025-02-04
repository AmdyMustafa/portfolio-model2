import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      {/* Footer Location */}
      <div>
        <h4>Location</h4>
        <p>
          2215 John Daniel Drive
          <br />
          Clark, MO 65243
        </p>
      </div>

      {/* Footer Social Icons */}
      <div>
        <h4>Around the Web</h4>
        <a href="#!" className="fab fa-facebook-f">Facebook</a>
        <a href="#!" className="fab fa-twitter">Twitter</a>
        <a href="#!" className="fab fa-linkedin-in">LinkedIn</a>
        <a href="#!" className="fab fa-dribbble">Dribbble</a>
      </div>

      {/* Footer About Text */}
      <div>
        <h4>About Freelancer</h4>
        <p>
          Freelance is a free to use, MIT licensed Bootstrap theme created by
        </p>
      </div>

      {/* Copyright Section */}
      <div>
        <small>Copyright &copy; Your Website 2023</small>
      </div>
    </footer>
  );
}

export default Footer;
