import React from "react";
import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBox,
  faHome,
  faCreditCard,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="content">
          <h1>Kontakt</h1>
          <p>
            Pokličite nas ali pustite sporočilo. Veselili se bomo vaših
            vprašanj.
          </p>
          <div className="icon-contact">
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faPhone} size="7x" />
              <p>+386 (0)68 633 798</p>
            </div>
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size="7x" />
              <p>info@racunalnisko-drustvo.si</p>
            </div>
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faBox} size="7x" />
              <p>Dostava: Opatje selo 50 5291 Miren</p>
            </div>
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faHome} size="7x" />
              <p>Glavna pisarna: Bratov Hvalič 2 5000 Nova Gorica</p>
            </div>
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faCreditCard} size="7x" />
              <p>IBAN: SI56 6100 0001 6980 585 BIC: HDELSI22</p>
            </div>
            <div className="icon-contact-inner">
              <FontAwesomeIcon className="icon" icon={faUniversity} size="7x" />
              <p>ID VAT: 52252540 Matična: 4032241000</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
