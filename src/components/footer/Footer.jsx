import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer>
      <a href="#header" onClick={topFunction} className="footer__logo">
        Jing Rui
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header" onClick={topFunction}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        //{" "}
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        //{" "}
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://facebook.com/yuji1910"
          rel="noreferrer"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a
          href="https://instagram.com/yuji1910"
          rel="noreferrer"
          target="_blank"
        >
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com/HoJingRui">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ho Jing Rui. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
