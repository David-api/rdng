import React from "react";
import "../css/media.css";
const rtv = require("../images/MediaIcons/rtv.png");
const sta = require("../images/MediaIcons/sta.svg");
const radioRobin = require("../images/MediaIcons/radiorobin.jpg");
const radioKoper = require("../images/MediaIcons/radiokoper.png");
const gotv = require("../images/MediaIcons/goTv.png");

class Media extends React.Component {
  render() {
    return (
      <div id="media">
        <div className="content">
          <h1>Mediji</h1>
          <p>
            Radi smo vidni na lokalni, državni in svetovni ravni. Zavedamo se
            vloge, ki jo igramo v tej igri. Zahvaljujemo se našim partnerjem in
            tebi oddaljeni obiskovalec :)
          </p>
          <div className="icon-media">
            <div className="icon-media-inner">
              <a
                href="https://4d.rtvslo.si/arhiv/porocila/174540915?jwsource=cl"
                target="_blancks"
              >
                <img
                  src={rtv}
                  alt="radio televizija slovenija"
                  title="radio televizija slovenija"
                />
              </a>
            </div>
            <div className="icon-media-inner">
              <a
                href="https://4d.rtvslo.si/arhiv/opoldnevnik/174540877?jwsource=cl"
                target="_blancks"
              >
                <img src={radioKoper} alt="radio koper" title="radio koper" />
              </a>
            </div>
            <div className="icon-media-inner">
              <a
                href="https://robin.si/index.php/lokalno/zanimivosti/item/4396-na-prvem-poslovno-tehniskemsejmu-tudi-ekarjola-pametne-lucke-in-avobot"
                target="_blancks"
              >
                <img src={radioRobin} alt="radio robin" title="radio robin" />
              </a>
            </div>
            <div className="icon-media-inner">
              <a
                href="https://krog.sta.si/2643665/v-novi-gorici-pripravljajo-poslovno-tehniski-sejem"
                target="_blancks"
              >
                <img
                  src={sta}
                  alt="slovenska tiskovna agencija"
                  title="slovenska tiskovna agencija"
                />
              </a>
            </div>
            <div className="icon-media-inner">
              <a
                href="https://www.youtube.com/watch?v=Tu59vgvmprs"
                target="_blancks"
              >
                <img src={gotv} alt="go tv" title="go tv" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
