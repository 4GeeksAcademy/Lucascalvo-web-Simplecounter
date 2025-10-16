import React from "react";

const Home = (props) => {
  return (
    <div className="text-center mt-5">
      <h1>Contador React</h1>
      <div className="d-flex justify-content-center bg-dark text-white fs-1">
        <div className="p-2">{props.digitSix}</div>
        <div className="p-2 ">{props.digitFive}</div>
        <div className="p-2">{props.digitFour}</div>
        <div className="p-2">{props.digitThree}</div>
        <div className="p-2">{props.digitTwo}</div>
        <div className="p-2">{props.digitOne}</div>
      </div>
    </div>
  );
};

export default Home;


