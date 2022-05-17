import React, { useState, useEffect } from 'react';
import axios from "axios";
import Jumbotron from '../components/Jumbotron';
import Spinner from '../components/Spinner';
import Landing from '../components/Landing';
import Menu from '../components/Menu';

const PinataConnection = (props) => {
  const keys = localStorage.getItem("keys")
  const accounts = JSON.parse(keys)
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [pinataAcctMessage, setPinataAcctMessage] = useState("");
  // const [accounts, setAccounts] = useState("");
  const errorMessage = "Uh-oh! Either your Pinata keys didn't work or something went wrong. Please try again."

  useEffect(() => {
    // setConnectionStatus("connecting")
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    axios
          .get(url, {
              headers: {
                  'pinata_api_key': accounts.key1,
                  'pinata_secret_api_key': accounts.key2
              }
          })
          .then((response) => {
            if(response.request["status"] === 200){ 
              setConnectionStatus("connected")
              setPinataAcctMessage(response.data["message"])
            } else {
              setPinataAcctMessage(errorMessage);
              setConnectionStatus("notConnected")
            }
          })
    .catch(error => {
      console.log("error", error)
      setPinataAcctMessage(errorMessage)
      setConnectionStatus("notConnected")
    })

  }, [accounts])

  return(
    <>
    {connectionStatus === null?  (
      <>
      <Jumbotron />
      <div className='d-flex justify-content-center '>
        <Spinner message= {"Connecting..."} />
      </div>
      </>
    ) : null}
    {connectionStatus === "notConnected"? (
      <Landing message={ errorMessage } /> 
    ) : null}

    {connectionStatus === "connected"? (
      <Menu message={ pinataAcctMessage }/>
    ) : null}
    </>
  )
}

export default PinataConnection;