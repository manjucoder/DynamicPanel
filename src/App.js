import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardElement from "./CardElement";
import ButtonElement from "./ButtonElement";
function App() {
  const [grp1Card, setgrp1Card] = useState([1]);
  const [grp2Card, setgrp2Card] = useState([1]);
  const addCard = (value) => {
    switch (value) {
      case "Group1":
        setgrp1Card([...grp1Card, grp1Card.length + 1]);
        break;
      case "Group2":
        setgrp2Card([...grp2Card, grp2Card.length + 1]);
        break;
      default:
        console.log("Something Wrong");
    }
  };
  return (
    <div className="container">
      <div className="App">
        <div className="row">
          <div className="col-md-6">
            <span className="title">Group 1</span>
            <div className="jumbotron">
              <div className="rectbox">
                {grp1Card.map((card, index) => (
                  <CardElement key={index} />
                ))}
              </div>
              <ButtonElement action={() => addCard("Group1")} />
            </div>
          </div>
          <div className="col-md-6">
            <span className="title">Group 2</span>
            <div className="jumbotron">
              <div className="rectbox">
                {grp2Card.map((card, index) => (
                  <CardElement key={index} />
                ))}
              </div>
              <ButtonElement action={() => addCard("Group2")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
