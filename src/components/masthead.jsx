import "../css/masthead.css";

function Masthead() {
  return (
    <header className="masthead">
      <section className="section_head">
        {/* Masthead Avatar Image*/}
        <img className="avatar" src="src/assets/img/avatars.png" alt="Avatar" />
        
        {/* Masthead Heading*/}
        <h1 >AMDY MUSTAFA</h1>
        {/* Icon Divider*/}
        <div className="lines-star">
          <div className="line"></div>
          <div><i className="fas fa-star"></i></div>
          <div className="line"></div>
        </div>
        {/* Masthead Subheading*/}
        <p>Frontend Web Developer | React, JavaScript, Sass, Bootstrap, jQuery, Redux & More</p>
        <img src="/avatars.png" alt="" />
      </section>
    </header>
  );
}


export default Masthead;