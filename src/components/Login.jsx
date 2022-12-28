import React, { useState, useContext } from "react";
import { AppState } from "../App";

const Login = () => {
  const [error, setError] = useState('');
  const App = useContext(AppState);
  const { ethereum } = window;
  const loginWallet = async () => {
    try {
      await ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      App.setAddress(accounts[0]);

      const chainId = await ethereum.request({method:"eth_chainId"})
      if (chainId == "0x3") {
        App.setChain("Ropsten")
        App.setLogin(true);

      }
      else if(chainId == "0x4"){
        App.setChain("Rinkeby")
        App.setLogin(true);

      }
      else if(chainId == "0x13881"){
        App.setChain("Polygon")
        App.setLogin(true);

      }
      else{
        App.setLogin(false)
        setError("Use only Ropsten,Rinkeby or Polygon Network")
      }

    } catch (e) {
      setError(`"${e.message}"`);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <div>
          <img
            className="h-24"
            src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
            alt=""
          />
        </div>

        <div className="glass flex flex-col justify-center items-center p-10">
          <p className="text-white text-4xl tracking-[3px]">Login</p>
          {ethereum ? (
            <>
              <div
                onClick={loginWallet}
                className="flex space-x-2 bg-blue-700 px-10 rounded-lg mt-10 cursor-pointer"
              >
                <button className="text-xl text-white tracking-[2px] py-5 ">
                  Connect With Metamask
                </button>
                <img
                  className="h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
                  alt=""
                />
              </div>
              <p className="mt-5 text-red-700 text-center">{error}</p>

            </>
          ) : (
            <>
              <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                <div className="flex space-x-2 bg-blue-700 px-10 rounded-lg mt-10 cursor-pointer">
                  <button className="text-xl text-white tracking-[2px] py-5 ">
                    Install Metamask
                  </button>
                  <img
                    className="h-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
                    alt=""
                  />
                </div>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
