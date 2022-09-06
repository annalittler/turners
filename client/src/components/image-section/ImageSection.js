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
          <h1>Car Insurance</h1>
          <h2>Trust Turners, we've got you covered.</h2>
          <div id="hero-img-btns">
            <Button value="Make a claim" className="hero-btn" />
            <Button value="Get a quote now" className="hero-btn" />
          </div>
        </div>
      </div>
    </>
  );
}
