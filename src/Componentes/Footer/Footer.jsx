import React from "react";
import s from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <hr className={s.separator} />
      <div className={s.socialMedia}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className={s.contact}>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        <p>Email: contacto@tuempresa.com</p>
      </div>

      {/* Sección opcional de enlaces rápidos */}
      <div className={s.quickLinks}>
        <a href="#about">Sobre Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#privacy">Política de Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
