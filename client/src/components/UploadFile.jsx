import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import PinFile from "./PinFile";

const UploadFile = (props) => {
  const [file, setFile] = useState("");

  const captureFile = (e) => {
    e.preventDefault()
    const input = e.target.files[0];
    setFile(input);
  }
  console.log("file: ", file)

  return (
    <> 
      <Jumbotron />
      <h2 className="display-6 mt-2">Upload File</h2>
      <form className="row g-2">
        <div className="col-auto centered-Items">
          <input
            type="file"
            className="form-control"
            onChange={ captureFile }
          />
        </div>
          {/* <div className="container">
            <button
            className="btn btn-dark mb-2"
            onClick={captureFile}
            >
            Submit
            </button>
          </div> */}
      </form>
      {file ? (
        <PinFile uploadedFile={ file } />
      ) : null}
    </>
  );
};

export default UploadFile;
