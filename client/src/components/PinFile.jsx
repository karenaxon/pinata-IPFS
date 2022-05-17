import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import FormData from "form-data";
import NavBar from "./NavBar";
import Menu from "./Menu";
import UploadFile from "./UploadFile";

const PinFile = (props) => {
  const [file, setFile] = useState("");
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [addMetaData, setAddMetaData] = useState(false);
  const [pinResponse, setPinResponse] = useState("");
  const [accounts, setAccounts] = useState("");
  const [menuNavigate, setMenuNavigate] = useState(false);
  const [error, setError] = useState(false);

  const errorMessage = "Uh-oh! Something went wrong. It could be that you already uploaded this file to Pinata. If not, please try again."

  let keyvaluesConst = {};
  let data = new FormData();

  useEffect(() => {
    setFile(props.uploadedFile);
    if (props.metaKeys && props.metaValues) {
      setKeys(props.metaKeys);
      setValues(props.metaValues);
      setAddMetaData(true);
    }
  }, []);

  if (addMetaData) {
    for (let i = 0; i < keys.length; i++) {
      keyvaluesConst[keys[i]] = values[i];
    }
  }

  useEffect(() => {
    const keys = localStorage.getItem("keys");
    setAccounts(JSON.parse(keys));
  }, []);

  const metadata = JSON.stringify({ keyvalues: keyvaluesConst });
  data.append("file", file);
  data.append("pinataMetadata", metadata);

  const submit = async () => {
    try {
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      const response = await axios.post(url, data, {
        maxBodyLength: "Infinity",
        headers: {
          pinata_api_key: accounts.key1,
          pinata_secret_api_key: accounts.key2,
        },
      });
      if (response.status === 200) {
        setPinResponse(
          `Your file has been pined to Pinata with hash # ${response.data["IpfsHash"]}`
        );
        setMenuNavigate(true);
      }
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
      setPinResponse(errorMessage);
      setError(true);
    }
  };

  const displayMetadata = () => {
    for (const kv in keyvaluesConst) {
      const k = kv;
      const v = keyvaluesConst[kv];
      return (
        <div>
          {k}: {v}{" "}
        </div>
      );
    }
  };
  if(menuNavigate) {
    return <Menu message={ pinResponse } />;
  }

  if(error) {
    return <UploadFile message={ errorMessage } />
  }

  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <h2 className="display-6 mt-4">Pin File to Pinata</h2>
          {props.uploadedFile.type.includes("image") ? (
            <figure
              className="figure min-vw-25 w-25"
              key={props.uploadedFileName}
            >
              <img
                className="img-thumbnail rounded min-vw-25 w-25"
                alt="uploaded-image"
                key={props.uploadedFileName}
                src={props.imageUrl}
              />
              <figcaption className="figure-caption">
                {props.uploadedFileName}
              </figcaption>
            </figure>
          ) : (
            <>
              <p>
                <strong>File name:</strong> {props.uploadedFileName}{" "}
              </p>
            </>
          )}
          {addMetaData ? (
            <>
              <p className="pt-2">Corresponding metadata:</p>
              {displayMetadata()}
            </>
          ) : null}
          <div className="container">
            <button
              className="btn btn-dark mt-2 py-2 rounded-2"
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {pinResponse ? (
        <div className="alert alert-blue bg-opacity-25 my-4">{pinResponse}</div>
      ) : null}
    </>
  );
};

export default PinFile;
