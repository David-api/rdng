import React from "react";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header-inner">
          <div id="header-img"></div>
          <div id="header-text">
            <div id="text-up">Računalniško društvo</div>
            <div id="text-down">Nova Gorica</div>
          </div>
          <div id="Button">
            <a href="https://shop.racunalnisko-drustvo.si/" target="_blanck">
              <button className="glow-on-hover" type="button">
                Trgovina
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
