import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayPins from "./components/DisplayPins";
// import SimpleStorageContract from "./.././"
import Landing from "./components/Landing";
import Login from "./components/Login";
import PinFile from "./components/PinFile";
import Menu from "./components/Menu";
import UploadFile from "./components/UploadFile";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     // const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       // SimpleStorageContract.abi,
  //       // deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
  
    return (
      <Routes>
        <Route path="/*" element={ <Landing /> } />
        <Route path="/landing" element={ <Landing /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/pinFile" element={ <PinFile /> } />
        <Route path="/displayPins" element={ <DisplayPins /> } /> 
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/uploadFile" element={ <UploadFile /> } />
      </Routes>
    );
  }
}

export default App;
