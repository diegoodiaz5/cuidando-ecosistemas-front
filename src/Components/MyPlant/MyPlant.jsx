import React from "react";
import "./MyPlant.css";
import NavBar from "../NavBar/NavBar";
import florist from "../Images/florist.png";
import more from "../Images/More.png";
export default function MyPlant() {
  return (
    <>
      <div className="myplants-container">
        <h2>
          <section id="myplants-title">
            <p>
              My Plants
              <img id="florist" src={florist} alt="florist" />
            </p>
            <img src={more} alt="more" />
          </section>
        </h2>
        <section className="plants-list">
            
        </section>
      </div>
      <NavBar />
    </>
  );
}
