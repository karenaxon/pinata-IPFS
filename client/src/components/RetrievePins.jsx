import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Jumbotron from "./Jumbotron";
import DisplayPins from "./DisplayPins";

const RetrievePins = () => {
  const [pinsList, setPinsList] = useState([]);
  const [loading, setLoading] = useState("no");
  const keys = localStorage.getItem("keys");
  const accounts = JSON.parse(keys);

  useEffect(() => {
    setLoading("yes");
    const url = `https://api.pinata.cloud/data/pinList?status=pinned`;

    // const pair = "metadata[name]={`type`:{string:`image`}}";
    // const endPoint = JSON.stringify(pair);
    // const imageUrl = `https://api.pinata.cloud/data/pinList?${endPoint}`;
    axios
      .get(url, {
        headers: {
          pinata_api_key: accounts.key1,
          pinata_secret_api_key: accounts.key2,
        },
      })
      .then((response) => {
        setLoading("done");
        setPinsList(response.data["rows"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // localStorage.setItem("pins", JSON.stringify(pinsList) || "");
  if (loading === "done") return <DisplayPins list={pinsList} />;
  return (
    <>
      <Jumbotron />
      {loading === "yes" ? (
        <>
          <div className="d-flex justify-content-center text-center">
            <Spinner message="Getting your pins" />
          </div>
        </>
      ) : null}
    </>
  );
};

export default RetrievePins;
