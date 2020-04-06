import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="footer-inner">
          <div id="left">
            <ul>
              <li>Social :</li>
              <li>
                <a
                  href="https://www.facebook.com/racunalniskodrustvo"
                  target="_blacnk"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcQePw7C9nIwQFChFviUPNA"
                  target="_blacnk"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>

                <a
                  href="https://shop.racunalnisko-drustvo.si/"
                  target="_blanck"
                >
                  <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </a>
              </li>
            </ul>
          </div>

          <div id="right">
            <ul>
              <li>
                <a href="#about">O nas</a>
              </li>
              <li>
                <a href="#activity">Aktivnosti</a>
              </li>
              <li>
                <a href="#companies">Podjetja</a>
              </li>
              <li>
                <a href="#media">Mediji</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
