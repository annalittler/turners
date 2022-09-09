import React from "react";
import "./Footer.scss";
import Insta from "./assets/insta.svg";
import House from "./assets/house.svg";
import Mail from "./assets/mail.svg";
import Facebook from "./assets/facebook.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer-left">
          <p>&copy; 2022 Turners</p>
        </section>
        <section className="footer-right">
          <a href="https://www.turners.co.nz/Company/Branches/">
            <img src={House} alt="" /> Branch Details
          </a>
          <a href="https://www.facebook.com/turnersNZ">
            <img src={Facebook} alt="" /> Facebook
          </a>
          <a href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/">
            <img src={Mail} alt="" /> Newsletter
          </a>
          <a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/">
            <img src={Mail} alt="" /> Email Alerts
          </a>
          <a href="https://www.instagram.com/turners_cars/">
            <img src={Insta} alt="" /> Instagram
          </a>
        </section>
      </footer>
    </>
  );
}
