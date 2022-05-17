import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import UploadFile from "./UploadFile";
import RetrievePins from "./RetrievePins";
import NavBar from "./NavBar";

const Menu = (props) => {
  const [ufNavigate, setUfNavigate] = useState(false);
  const [rpNavigate, setRpNavigate] = useState(false);

  if (ufNavigate) {
    return <UploadFile />;
  }

  if (rpNavigate) {
    return <RetrievePins />;
  }

  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
        {props.message ? (
          <div className="alert alert-blue bg-opacity-25 my-2 text-center">
            {props.message}
          </div>
        ) : null}
        <h2 className="display-6 mt-4">What would you like to do?</h2>
        <div className="container">
          <div className="mt-4">
            <h6>Upload File</h6>
            <button
              className="btn btn-dark"
              onClick={(e) => {
                e.preventDefault();
                setUfNavigate(true);
              }}
            >
              Submit
            </button>
          </div>

          <div className="mt-4">
            <h6>Display My Pins</h6>
            <button
              className="btn btn-dark"
              onClick={(e) => {
                e.preventDefault();
                setRpNavigate(true);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
