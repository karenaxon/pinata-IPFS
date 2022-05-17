import React from "react";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";

const DisplayPins = (props) => {
  const pins = props.list;

  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
        <h2 className="display-6 my-4 text-center">Your Pins</h2>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="row">
            {pins.map((pin) => (
              <figure className="figure min-vw-25 w-25" key={pin.ipfs_pin_hash}>
                <img
                  className="img-thumbnail rounded"
                  alt="user-pin"
                  key={pin.ipfs_pin_hash}
                  // src={`https://gateway.pinata.cloud/ipfs/${pin.ipfs_pin_hash}`}
                  src={`https://kaxon.mypinata.cloud/ipfs/${pin.ipfs_pin_hash}`}
                />
                <figcaption className="figure-caption text-end .bg-secondary bg-opacity-25">
                  {`${pin.metadata.name}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPins;
