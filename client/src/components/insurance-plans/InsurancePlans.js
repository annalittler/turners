import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./InsurancePlans.scss";
import { useState } from "react";

export default function InsurancePlans() {
  const [showMore, setShowMore] = useState(false);

  const showMoreFunc = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="insurance-plans">
        <table>
          <tr>
            <th></th>
            <th>
              <span>Most Popular</span>
              <span>Comprehensive</span>
            </th>
            <th>Third Party, Fire &amp; Theft</th>
            <th>Third Party Only</th>
          </tr>
          <tr>
            <td>New for old car replacement</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
          </tr>
          <tr>
            <td>Windscreen and window glass cover</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
          </tr>
          <tr>
            <td>Trailer Cover</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
          </tr>
          <tr>
            <td>Hire car after theft</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
          </tr>
          <tr>
            <td>Emergency travel, accomodation &amp; repairs</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
            <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
          </tr>
          {showMore && (
            <>
              <tr>
                <td>Key and locks replacement</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
              </tr>
              <tr>
                <td>Towing and storage costs</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
              </tr>
              <tr>
                <td>Damage by uninsured drivers</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
              </tr>
              <tr>
                <td>Replacement car cover</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
              </tr>
              <tr>
                <td>Transport Cover</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
              </tr>
              <tr>
                <td colspan="4" id="optional-extras">
                  Optional Extras
                </td>
              </tr>
              <tr>
                <td>Roadside assistance</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
              </tr>
              <tr>
                <td>Hire car after an event up to 14 days</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
                <td>{<FontAwesomeIcon icon={faXmark} className="cross" />}</td>
              </tr>
              <tr>
                <td>
                  Turners excess-free windscreen and window glass replacement
                </td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
                <td>{<FontAwesomeIcon icon={faCheck} className="tick" />}</td>
              </tr>
            </>
          )}
        </table>
        <div className="show-more" onClick={showMoreFunc}>
          {showMore === false ? (
            <p>
              Show more items
              {<FontAwesomeIcon icon={faChevronDown} className="arrow" />}
            </p>
          ) : (
            <p>
              Show less items
              {<FontAwesomeIcon icon={faChevronUp} className="arrow" />}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
