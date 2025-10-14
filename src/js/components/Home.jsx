import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { preprocessCSS } from "vite";

//create your first component
const Home = (props) => {
  return (
    <div>
      <div>{props.digitTwo}</div>
      <div>{props.digitOne}</div>
    </div>
  );
};

export default Home;