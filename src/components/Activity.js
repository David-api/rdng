import React from "react";
import "../css/activity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faBolt,
  faRobot,
  faFilm,
  faPencilRuler,
  faCar
} from "@fortawesome/free-solid-svg-icons";

class Activity extends React.Component {
  render() {
    return (
      <div id="activity">
        <div className="content">
          <h1>Aktivnosti</h1>
          <p>
            Člani in partnerji so deležni strokovnega izobraževanja po meri.
            Članom in partnerjem se individualno prilagajamo. Radi gradimo
            konstruktivno učno okolje. Povezani smo v ekipnem duhu. Zanima nas
            vse. :)
          </p>

          <div className="icon-activity">
            <div className="icon-activity-inner">
              <FontAwesomeIcon className="icon" icon={faBolt} size="8x" />
              <h1>Elektrotehnika</h1>
            </div>
            <div className="icon-activity-inner">
              <FontAwesomeIcon className="icon" icon={faFileCode} size="7x" />
              <h1>Programiranje</h1>
            </div>
            <div className="icon-activity-inner">
              <FontAwesomeIcon className="icon" icon={faRobot} size="7x" />
              <h1>Robotika</h1>
            </div>
            <div className="icon-activity-inner">
              <FontAwesomeIcon className="icon" icon={faFilm} size="7x" />
              <h1>Multimedija</h1>
            </div>
            <div className="icon-activity-inner">
              <FontAwesomeIcon
                className="icon"
                icon={faPencilRuler}
                size="7x"
              />
              <h1>Dizajn</h1>
            </div>
            <div className="icon-activity-inner">
              <FontAwesomeIcon className="icon" icon={faCar} size="7x" />
              <h1>Car tuning</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
