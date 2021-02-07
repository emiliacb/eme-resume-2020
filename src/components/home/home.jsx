import React, { useState, useEffect } from "react";
import Loading from "../loading/loading.jsx";
import axios from "axios";
import Infobox from "../infobox/infobox.jsx";
import style from "./home.module.css";
import qr from "../../media/qr-code.svg";

const URL = process.env.REACT_APP_URL || process.env.REACT_APP_VERCEL_URL;

const Home = ({ lang }) => {
  const [itsLoading, setItsLoading] = useState(true);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    setItsLoading(true);
    axios
      .get(`${URL}/api/lang/?query=${lang}`)
      .then((res) => {
        setResume(res.data);
        setItsLoading(false);
      })
      .catch((err) => {
        console.log("Something was grong : ", err);
      });
  }, [lang]);

  return (
    <section>
      {itsLoading && <Loading />}
      <article>
        <div className={style.containerResume}>
          <div className={style.column}>
            {resume &&
              resume.data.map((e) => {
                if (e.side === "left") {
                  return (
                    <Infobox
                      key={e.id}
                      color={e.id}
                      subtitle={e.subtitle}
                      text={e.text}
                    />
                  );
                } else {
                  return false;
                }
              })}
          </div>
          <div className={style.column}>
            <div className={style.photo}>
              <div>
                <div
                  className={style.pixelFront}
                  alt={
                    lang === "EN"
                      ? "pixelart selfportrait"
                      : "retrato en pixelart"
                  }
                >
                  {" "}
                </div>
                <div
                  className={style.pixelBack}
                  alt={
                    lang === "EN"
                      ? "pixelart selfportrait"
                      : "retrato en pixelart"
                  }
                >
                  {" "}
                </div>
              </div>
            </div>
            {resume &&
              resume.data.map((e) => {
                if (e.side === "right") {
                  return (
                    <Infobox
                      key={e.id}
                      color={"Right"}
                      subtitle={e.subtitle}
                      text={e.text}
                    />
                  );
                } else {
                  return false;
                }
              })}
            <img className={style.qr} src={qr} alt="QR code" />
            <i className={style.webVersion}>
              {lang === "EN" ? " Web Version" : " Versión Web"}
            </i>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
