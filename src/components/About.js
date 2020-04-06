import React from "react";
import "../css/about.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="content">
          <h1>O nas</h1>
          <p>
            Leta 2011 v Novi Gorici ustanovljeno Računalniško društvo je sprva
            štelo le tri člane ustanovitelje. Danes ima društvo več kot enajst
            članov in njihovo število se iz meseca v mesec povečuje.
          </p>

          <p>
            Poslanstvo društva je razvijanje računskega mišljenja in logičnega
            sklepanja pri otrocih, ki izkazujejo zanimanje na tehniškem
            področju.Zastavljeni cilj dosegamo tako, da otroci skozi igro
            spoznavajo napredne strukture programiranja in se na ta način učijo
            logičnega razmišljanja.
          </p>

          <p>
            Prizadevamo si graditi konstruktivno učno okolje z znatno mero
            motivacije, kar pripomore k boljšim in hitrejšim rezultatom, tako v
            izobraževalnem kot v socialnem okolju.Spodbujamo timsko delo in delo
            na projektih.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
