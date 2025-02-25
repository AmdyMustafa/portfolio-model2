import "../css/Contact.css";
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";
import Titre from "./composants/Titre";
import Coordonnees from "./composants/Coordonnees";

function Contacts() {
  const [state, handleSubmit] = useForm("xzzdvpnr");
  const formRef = useRef(null); // Référence pour le formulaire

  useEffect(() => {
    if (state.succeeded) {
      window.confirm("✅ Merci! Votre message est envoyé.");
      formRef.current.reset(); // Effacer le formulaire
    }
  }, [state.succeeded]);


  return (
    <section className="section_contacts">
      <Titre titre1="CONTACT" titre2="CONTACTER" />
      <div className="div_coord_cont">
        <div className="div_coordonnees" >
          <Coordonnees titre="Mon adresse" Valeur="Lyon 69000, France" icone_class="fa-solid fa-location-dot" />
          <Coordonnees titre="Tel" Valeur="0766556039" icone_class="fa-solid fa-mobile-screen-button" />
          <Coordonnees titre="Mail" Valeur="amoustapha. niang@gmail.com" icone_class="fa-regular fa-envelope" />
        </div>

        <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-elem">
            <input className="input" id="name" name="name" type="text" placeholder=" " required />
            <label htmlFor="name">Nom</label>
          </div>
          <div className="form-elem">
            <input className="input" id="fullname" name="fullname" type="text" placeholder=" " required />
            <label htmlFor="fullname">Prénom</label>
          </div>

          <div className="form-elem">
            <input className="input" id="email" name="email" type="email" placeholder=" " required />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-elem">
            <textarea className="input" id="message" name="message" required placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button className="button_send" type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
