import React from "react";

export default function Heading() {
  return (
    <div className="main-div">
      <img className="laura-img" src={require("../images/rectangle.png")}></img>
      <div className="title-div">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p className="website-p">laurasmith.website</p>
        <div className="button-div">
          <button>
            <img src={require("../images/Mail.png")}></img>Email
          </button>
        </div>
      </div>
    </div>
  );
}
