import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {" "}
      by Emilia Cabral <br />
      <a
        target="_blank"
        rol="link"
        rel="noopener noreferrer"
        href="https://github.com/Em3c2/eme-resume"
        className={style.repo}
      >
        {">"} Repository {"<"}
      </a>{" "}
    </footer>
  );
};

export default Footer;
