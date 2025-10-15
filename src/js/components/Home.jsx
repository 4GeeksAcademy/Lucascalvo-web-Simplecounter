import React from "react";
import Card from "./Card.jsx";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { preprocessCSS } from "vite";

//create your first component

const Home = (props) => {
  return (
    <div className="text-center mt-5">
      <h1>⏱️ Contador React</h1>
      <div className="d-flex justify-content-center gap-2 fs-1">
        <div className="bg-dark text-white p-3 rounded">{props.digitSix}</div>
        <div className="bg-dark text-white p-3 rounded">{props.digitFive}</div>
        <div className="bg-dark text-white p-3 rounded">{props.digitFour}</div>
        <div className="bg-dark text-white p-3 rounded">{props.digitThree}</div>
        <div className="bg-dark text-white p-3 rounded">{props.digitTwo}</div>
        <div className="bg-dark text-white p-3 rounded">{props.digitOne}</div>
      </div>
    </div>
  );
};

export default Home;
