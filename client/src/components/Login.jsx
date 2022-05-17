import React from "react";
import logo from "./../assets/images/home-logo.png";
import getWeb3 from "./../utils/getWeb3";

const Login = () => {
  let connectAccounts = () => {
    const web3 = getWeb3();
    const accounts = web3.eth.getAccounts();
    try {
      // Get network provider and web3 instance.
      // Use web3 to get the user's accounts.
      //
      // // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      //web3.eth.getAccounts()
      // console.log("accounts: ", accounts);
      // localStorage.setItem('accounts', JSON.stringify(accounts[0]));
      // console.log(accounts)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="landing">
      <div>
        <img src={logo} alt="logo" className="landingLogo" />
      </div>
      <button
        className="landing-btn btn btn-lg mt-4 rounded-pill py-4"
        onClick={() => connectAccounts()}
      >
        <strong>Connect Your Wallet</strong>
      </button>
    </div>
  );
};

export default Login;
