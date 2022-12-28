import React, { useContext, useState, useEffect } from "react";
import { AppState } from "../App";

const Header = () => {
  const { ethereum } = window;
  const App = useContext(AppState);
  const [showChains, setShowChains] = useState(false);

  useEffect(() => {
    ethereum.on("chainChanged", async (chainId) => {
      if (chainId == "0x3") {
        App.setChain("Ropsten");
      } else if (chainId == "0x4") {
        App.setChain("Rinkeby");
      } else if (chainId == "0x13881") {
        App.setChain("Polygon");
      } else {
        App.setLogin(false);
      }
    });

    ethereum.on("accountsChanged", async (accounts)=>{
      App.setAddress(accounts[0])
    })

  }, []);

  const changeToRinkeby = async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }],
    });
  };
  const changeToRopsten = async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x3" }],
    });
  };
  const changeToPolygon = async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }],
    });
    console.log("Changed TO Polygon Test Net");
  };

  return (
    <>
      <div className="px-5 lg:px-[100px] glass2 flex justify-between items-center">
        <div>
          <img
            className="h-20"
            src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
            alt=""
          />
        </div>
        <div className="flex space-x-2 items-center">
          <p className="text-2xl text-white glass p-1">
            {App.address.slice(0, 8)}...{App.address.slice(38)}
          </p>
          <svg
            className="h-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
            />
          </svg>
        </div>
        <div className="flex space-x-2 items-center relative">
          <p className="cursor-pointer glass p-1 flex items-center text-white text-2xl">
            <span>
              {App.chain == "Ropsten" || App.chain == "Rinkeby" ? (
                <img className="h-6 mr-2" src="ethereum-eth.svg" />
              ) : (
                <img className="h-6 mr-2" src="polygon.png" />
              )}
            </span>{" "}
            <span onClick={() => setShowChains(true)}>{App.chain}</span>
          </p>
          <svg
            className="text-white h-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          {/* All Chains */}

          <div
            className={`${
              showChains ? "" : "hidden"
            } glass absolute lg:mt-32 "`}
          >
            <p
              onClick={changeToRinkeby()}
              className="flex items-center px-5 py-2 hover:text-red-700 cursor-pointer text-xl text-white"
            >
              <span>
                <img className="h-6 mr-2" src="ethereum-eth.svg" alt="" />
              </span>{" "}
              <span>Rinkeby</span>
            </p>
            <p
              onClick={changeToRopsten()}
              className="flex items-center px-5 py-2 hover:text-red-700 cursor-pointer text-xl text-white"
            >
              <span>
                <img className="h-6 mr-2" src="ethereum-eth.svg" alt="" />
              </span>{" "}
              <span>Ropsten</span>
            </p>
            <p
              onClick={changeToPolygon()}
              className="flex items-center px-5 py-2 hover:text-red-700 cursor-pointer text-xl text-white"
            >
              <span>
                <img className="h-6 mr-2" src="polygon.png" alt="" />
              </span>{" "}
              <span>Polygon</span>
            </p>
            <p
              onClick={() => setShowChains(false)}
              className="justify-center cursor-pointer text-red-700 flex items-center mb-2"
            >
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
