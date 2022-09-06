import React from "react";
import "./Reviews.scss";
import review1 from "./assets/review-1.png";
import review2 from "./assets/review-2.png";
import review3 from "./assets/review-3.png";
import review4 from "./assets/review-4.png";
import Arrow from "./assets/Arrow.svg";

export default function Reviews() {
  return (
    <>
      <div id="reviews">
        <h3>
          Customer Reviews <img src={Arrow} />
        </h3>
        <div className="review-blocks">
          <section>
            <h4>Nadia O'Connor</h4>
            <h5>Founder of LightlyNZ</h5>
            <img src={review1} alt="" />
            <p> I couldn't recommend Turners Insurance highly enough</p>
          </section>
          <section>
            <h4>Andrew Howell</h4>
            <h5>CEO of RentMe</h5>
            <img src={review2} alt="" />
            <p> Turners offers a professional and pain-free service</p>
          </section>
          <section>
            <h4>Leslie Kailing</h4>
            <h5>Director of Bizzy</h5>
            <img src={review3} alt="" />
            <p> Buying insurance with Turners was easy</p>
          </section>
          <section>
            <h4>Emmanuel Smith</h4>
            <h5>Co-Founder of Shuttle</h5>
            <img src={review4} alt="" />
            <p> Turners Insurance is convenient for businesses</p>
          </section>
        </div>
      </div>
    </>
  );
}
