import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import PinataConnection from "./../utils/PinataConnection";

const Landing = (props) => {
  const [pinataApiKey, setPinataApiKey] = useState("");
  const [pinataSecretKey, setPinataSecretKey] = useState("");
  let apiKey;
  let secretKey;
  const keys = {
    key1: pinataApiKey,
    key2: pinataSecretKey,
  };

  localStorage.setItem("keys", JSON.stringify(keys) || "");

  if (pinataApiKey && pinataSecretKey) {
    return (
      <div className="container">
        <PinataConnection apiKey={pinataApiKey} secretKey={pinataSecretKey} />
      </div>
    );
  }

  return (
    <div className="container">
      <Jumbotron />
      {props.message ? (
        <div className="alert alert-danger bg-opacity-25 my-2">
          {props.message}
        </div>
      ) : null}
      <h2 className="display-6">Upload | View Pins but first login</h2>
      <p className="fw-light">
        Your keys will be stored in local storage until you clean your cache.
      </p>
      <hr />
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Your Pinata API Key</label>
          <input
            type="text"
            className="form-control"
            placeholder="Pinata API Key"
            onChange={(e) => {
              apiKey = e.target.value;
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Pinata Secret API Key</label>
          <input
            type="password"
            className="form-control"
            placeholder="Pinata Secret API Key"
            id="inputField"
            onChange={(e) => {
              secretKey = e.target.value;
            }}
          />
          <button
            type="button"
            className="btn btn-dark mt-3"
            onClick={(e) => {
              setPinataApiKey(apiKey);
              setPinataSecretKey(secretKey);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
