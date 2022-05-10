import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import PinataConnection from "./../utils/PinataConnection";

const Landing = () => {
  const [pinataApiKey, setPinataApiKey] = useState("");
  const [pinataSecretKey, setPinataSecretKey] = useState("");
  let apiKey;
  let secretKey;
  const keys = {
      key1: pinataApiKey, 
      key2: pinataSecretKey 
    };

  localStorage.setItem("keys", JSON.stringify(keys)  || "");
  
  if(pinataApiKey && pinataSecretKey){
    return(
        <div className="container">
          <PinataConnection apiKey={pinataApiKey} secretKey={pinataSecretKey}/>
        </div>
    )
  }

  return (
      <div className="container">
        <Jumbotron />
        <h2 className="display-6">Connect to your Pinata account</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Pinata API Key</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pinata API Key"
              // value={inputField}
              onChange={(e) => {
                apiKey = (e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Pinata Secret API Key</label>
            <input
              type="password"
              className="form-control"
              placeholder="Pinata Secret API Key"
              // value={inputField}
              id="inputField"
              onChange={(e) => {
                secretKey = (e.target.value);
              }}
            />
            <button 
            type="button" 
            className="btn btn-dark mt-3"
            onClick={(e) => {
              setPinataApiKey(apiKey)
              setPinataSecretKey(secretKey)
              // setInputField("")
              }
            }>Submit</button>
          </div>
        </form>
      </div>
  );
};

export default Landing;
