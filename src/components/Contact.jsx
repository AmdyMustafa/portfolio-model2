import "../css/Contact.css";
import { useForm, ValidationError } from '@formspree/react';

function Contacts() {
  const [state, handleSubmit] = useForm("xzzdvpnr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section className="section_contacts" onSubmit={handleSubmit}>
      <h2 >Contacts</h2>
      {/* Icon Divider*/}
      <div className="lines-star">
        <div className="line"></div>
        <div><i className="fas fa-star"></i></div>
        <div className="line"></div>
      </div>
      <form id="contactForm">
          <div className="form-elem">
            <input className="input" id="name" type="text" placeholder=" " required />
            <label for="name">Full name</label>
            </div>

          <div className="form-elem">
            <input className="input"  id="email" type="email" placeholder=" " required />
            <label for="email">Email address</label>
            </div>

          <div className="form-elem">
            <input className="input"  id="phone" type="tel" placeholder=" " required />
            <label for="phone">Phone number</label>
            </div>

          <div className="form-elem">
            <textarea className="input" id="message" required placeholder=" " ></textarea>
            <label for="message">Message</label>
            </div>

          <button className="button_send" type="submit" disabled={state.submitting}>Send</button>
        </form>
    </section>
  );
}

export default Contacts;