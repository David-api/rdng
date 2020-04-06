import React from "react";
import "../css/companies.css";
const instrumentationTechnologies = require("../images/IconsCompanies/instrumentationTechnologies.png");
const mahle = require("../images/IconsCompanies/mahle.png");
const e3 = require("../images/IconsCompanies/e3.png");
const saop = require("../images/IconsCompanies/saop.png");
const kate = require("../images/IconsCompanies/kate.png");
const rra = require("../images/IconsCompanies/rra.png");
const comtrade = require("../images/IconsCompanies/comtrade.png");
const gostol = require("../images/IconsCompanies/gostol.png");
const arctur = require("../images/IconsCompanies/arctur.png");
const nomago = require("../images/IconsCompanies/nomago.png");
const castral = require("../images/IconsCompanies/c-astral.png");
const fini = require("../images/IconsCompanies/fini.png");
const fri = require("../images/IconsCompanies/fri.png");
const markacija = require("../images/IconsCompanies/markacija.png");
const akeo = require("../images/IconsCompanies/akeo.png");
const smodin = require("../images/IconsCompanies/smodin.png");

class Companies extends React.Component {
  render() {
    return (
      <div id="companies">
        <div className="content">
          <h1>Podjetja</h1>
          <p>
            Skupaj sodelujemo pri pripravi programov za osnovnošolce in
            srednješolce. Podpirajo nas pri izvedbi naših projektov in idej.
            Gojimo profesionalen odnos. Brez vas ni nas. ;)
          </p>
          <div className="icon-companies">
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.i-tech.si/"
              >
                <img
                  src={instrumentationTechnologies}
                  alt="instrumentation technologies"
                  title="instrumentation technologies"
                />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mahle.com/"
              >
                <img src={mahle} alt="mahle" title="mahle" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.e3.si/"
              >
                <img src={e3} alt="e3" title="e3" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.saop.si/"
              >
                <img src={saop} alt="saop" title="saop" />
              </a>
            </div>
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://pirs.si/#/details;uuid=dfe33021-5ede-4181-8994-545e9fbc7c44"
              >
                <img src={kate} alt="kate" title="kate" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.rra-sp.si/"
              >
                <img src={rra} alt="rra" title="rra" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.comtrade.com/"
              >
                <img src={comtrade} alt="comtrade" title="comtrade" />
              </a>
            </div>
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gostolgroup.eu/sl"
              >
                <img src={gostol} alt="gostol" title="gostol" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.arctur.si/"
              >
                <img src={arctur} alt="arctur" title="arctur" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.nomago.si/"
              >
                <img src={nomago} alt="nomago" title="nomago" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.c-astral.com/"
              >
                <img src={castral} alt="c-astral" title="c-astral" />
              </a>
            </div>
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://finioglasi.si/"
              >
                <img src={fini} alt="fini oglsi" title="fini oglasi" />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.fri.uni-lj.si/sl"
              >
                <img
                  src={fri}
                  alt="fakulteta za računalništvo in informatiko"
                  title="fakulteta za računalništvo in informatiko"
                />
              </a>
            </div>

            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.markacija.si/"
              >
                <img src={markacija} alt="markacija" title="markacija" />
              </a>
            </div>
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.smodin.si/"
              >
                <img src={smodin} alt="smodin" title="smodin" />
              </a>
            </div>
            <div className="icon-companies-inner">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.akeo.com/"
              >
                <img src={akeo} alt="akeo" title="akeo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Companies;
