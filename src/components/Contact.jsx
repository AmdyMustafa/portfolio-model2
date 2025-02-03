import "../css/Contact.css";

function Contacts() {
  return (
    <section className="section_contacts">
      <h2 >Contacts</h2>
      {/* Icon Divider*/}
      <div className="lines-star">
        <div className="line"></div>
        <div><i className="fas fa-star"></i></div>
        <div className="line"></div>
      </div>
      <div className="contact_form">
        <form id="contactForm">
          <div>
            <label for="name">Full name</label>
            <input id="name" type="text" placeholder="Enter your name..." required />
          </div>

          <div>
            <label for="email">Email address</label>
            <input id="email" type="email" placeholder="name@example.com" required />
          </div>

          <div>
            <label for="phone">Phone number</label>
            <input id="phone" type="tel" placeholder="(123) 456-7890" required />
          </div>

          <div>
            <label for="message">Message</label>
            <textarea id="message" placeholder="Enter your message here..." required></textarea>
          </div>

          <button type="submit">Send</button>
        </form>


      </div>
    </section>
  );
}

export default Contacts;