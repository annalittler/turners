import React from "react";
import "./HomeFAQs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HomeFAQs() {
  return (
    <>
      <div className="home-faqs">
        <h4>Frequently Asked Questions</h4>
        <div className="questions-section">
          <section>
            <div className="home-faq-question">
              <p>Who is the underwriter?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
            <div className="home-faq-question">
              <p>If I need to cancel my policy, can I get a refund?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
            <div className="home-faq-question">
              <p>How do I make a car insurance claim?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
          </section>
          <section>
            <div className="home-faq-question">
              <p>What if my windscreen or window is damaged?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
            <div className="home-faq-question">
              <p>Someone drove into my car, what do I do?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
            <div className="home-faq-question">
              <p>How can I make a premium payment by credit card?</p>
              {/* {<FontAwesomeIcon icon={faChevronDown} className="faq-arrow" />} */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
