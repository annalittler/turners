import React from "react";
import "./BottomNav.scss";
import { col1, col2, col3, col4 } from "./NavItems";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <>
      <div className="bottom-nav">
        <section>
          <h4>CARS</h4>
          {col1.map((item) => (
            <Link to={item.link} className="bottom-nav-item">
              {item.name}
            </Link>
          ))}
        </section>
        <section>
          <h4>FINANCE &amp; INSURANCE</h4>
          {col2.map((item) => (
            <Link to={item.link} className="bottom-nav-item">
              {item.name}
            </Link>
          ))}
        </section>
        <section>
          <h4>SEARCH FOR</h4>
          {col3.map((item) => (
            <Link to={item.link} className="bottom-nav-item">
              {item.name}
            </Link>
          ))}
        </section>
        <section>
          <h4>ABOUT US</h4>
          {col4.map((item) => (
            <Link to={item.link} className="bottom-nav-item">
              {item.name}
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
