import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <a className="homeTitle">
        CYBER <br /> MONDAY
      </a>
      <a className="discount">Take 20% off everything with code CYBER</a>
    </div>
  );
}

export default Home;
