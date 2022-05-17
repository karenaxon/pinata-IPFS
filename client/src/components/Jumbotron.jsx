import React from "react";
import Logo from "./../assets/images/home-logo.png";

const Jumbotron = () => {
  return (
    <>
      <div className="container my-2 py-2 bg-warning rounded-3">
        <div className="container-fluid d-flex justify-content-center">
          <img src={Logo} className="homeLogo img-fluid" alt="logo"></img>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
