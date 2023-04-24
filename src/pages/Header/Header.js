import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-list">
            <div className="header-listitem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="header-listitem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="header-listitem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="header-listitem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="header-listitem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="header-title"> This is Header-Title</h1>
          <p className="header-desc"> This is Header-Description</p>
          <button className="header-button"> This is Header-Button</button>
          <div className="header-search">
            <div className="header-search-item">
              <FontAwesomeIcon icon={faBed} />
              <input
                type="text"
                placeholder="Where to?"
                className="header-search-icon"
              />
            </div>
            <div className="header-search-item">
              <FontAwesomeIcon icon={faCalendarDays} />
             <span className="header-search-text">date to date</span>
            </div>
            <div className="header-search-item">
              <FontAwesomeIcon icon={faPerson} />
              <span className="header-search-text">2 adults 2 children 1 room</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
