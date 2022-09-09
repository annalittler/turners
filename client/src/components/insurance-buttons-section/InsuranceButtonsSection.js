import React from "react";
import "./InsuranceButtonsSection.scss";
import Button from "../Button/Button";

export default function InsuranceButtonsSection() {
  return (
    <>
      <div className="insurance-buttons-section">
        <Button value="Make a Claim" className="large-btn btn" />
        <Button value="Get a Quote Now" className="large-btn btn" />
      </div>
    </>
  );
}
