import React, { useState } from "react";
import PinFile from "./PinFile";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";

const UploadFile = (props) => {
  const [file, setFile] = useState("");
  const [includeMeta, setIncludeMeta] = useState("");
  const [metaReady, setMetaReady] = useState(false);
  const [keyArr, setKeyArr] = useState("");
  const [valArr, setValArr] = useState("");
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const captureFile = (e) => {
    e.preventDefault();
    const input = e.target.files[0];
    setFile(input);
    setFileName(input["name"]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleRadioInput = (e) => {
    setIncludeMeta(e.target.value);
  };

  const handleKeyChange = (e) => {
    const { value } = e.target;
    setKeyArr([value]);
  };

  const handleValChange = (e) => {
    const { value } = e.target;
    setValArr([value]);
  };

  const handleMetaSubmit = (e) => {
    e.preventDefault();
    setMetaReady(true);
  };

  if (includeMeta === "no") {
    return (
      <PinFile
        uploadedFile={file}
        uploadedFileName={fileName}
        imageUrl={imageUrl}
      />
    );
  }

  if (metaReady) {
    return (
      <PinFile
        uploadedFile={file}
        metaKeys={keyArr}
        metaValues={valArr}
        uploadedFileName={fileName}
        imageUrl={imageUrl}
      />
    );
  }

  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
      {props.message ? (
        <div className="alert alert-danger bg-opacity-25 my-2">
          {props.message}
        </div>
      ) : null}
      
        <h2 className="display-6 centered-Items">Upload A File</h2>
        {!file ? (
          <>
            <form className="row g-2">
              <div className="col-auto centered-Items">
                <input
                  type="file"
                  className="form-control"
                  onChange={captureFile}
                />
              </div>
            </form>
          </>
        ) : null}
        {file ? (
          <>
            <div>
              {file.type.includes("image") ? (
                <figure className="figure min-vw-25 w-25 mt-2" key={fileName}>
                  <img
                    className="img-thumbnail rounded min-vw-25 w-25"
                    alt="uploaded-image"
                    key={fileName}
                    src={imageUrl}
                  />
                  <figcaption className="figure-caption">{fileName}</figcaption>
                </figure>
              ) : (
                <>
                  <p>
                    File name: <strong> {fileName} </strong>{" "}
                  </p>
                </>
              )}
            </div>
            <div className="mt-4 ps-2">
              <h2 className="display-6">Metadata</h2>
              <p>Would you like to upload metadata with your file?</p>
              <hr />
              <p>
                Metadata is custom key-value pairs that can be used later for
                querying your Pinata pins. These values can be:
              </p>
              <ul className="list-unstyled">
                <ul>
                  <li>Strings</li>
                  <li>Numbers - integers or decimals</li>
                  <li>Dates - in ISO_8601 format</li>
                </ul>
              </ul>
              <p>Example = NFT Name: Crazy Cat</p>
              <div className="container mt-2" onChange={handleRadioInput}>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="yes"
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check my-2">
                  <input className="form-check-input" type="radio" value="no" />
                  <label className="form-check-label">No</label>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {includeMeta === "yes" ? (
          <>
            <form className="my-4 g-2">
              <div className="row g-2">
                <div className="col-auto centered-Items">
                  <label className="form-label">Label</label>
                  <input
                    type="text"
                    placeholder="Label"
                    className="form-control"
                    onChange={handleKeyChange}
                  />
                </div>
                <div className="col-auto centered-Items">
                  <label className="mb-2 form-label">Value</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="form-control"
                    onChange={handleValChange}
                  />
                </div>
              </div>
              <div className="col-auto centered-Items mt-2">
                <button
                  className="btn btn-dark mt-2"
                  onClick={handleMetaSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : null}
      </div>
    </>
  );
};

export default UploadFile;
