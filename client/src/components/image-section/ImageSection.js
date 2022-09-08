import React from "react";
import "./ImageSection.scss";
import "../Button/Button.scss";
import Button from "../Button/Button";
import { roundBtn } from "../Button/ButtonStyles";

export default function ImageSection() {
  return (
    <>
      <div id="image-section">
        <div id="hero-img-div">
          <section className="main-text">
            <h1>Car Insurance</h1>
            <h2>Trust Turners, <br/> We've got you covered.</h2>
            <div id="hero-img-btns">
              <Button value="Make a Claim" className="hero-btn" />
              <Button value="Get a Quote Now" className="hero-btn" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
