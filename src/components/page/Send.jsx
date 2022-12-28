import React, { useState, useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import { AppState } from "../../App";

const Send = () => {
  const [showErc, setShowErc] = useState(false);
  const [ercLoading, setErcLoading] = useState(false);
  const [tokenChanged, setTokenChanged] = useState(false);
  const App = useContext(AppState);
  return (
    <>
      <div className="">
        <div className="flex justify-evenly items-center">
          <div className="flex justify-between items-center px-3 rounded-lg py-1 cursor-pointer space-x-3 border-2 border-blue-700">
            <svg
              className="h-6 text-white bi bi-coin"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <p className="text-2xl text-white">{App.symbol
            }</p>

            <svg
              onClick={() => {
                setShowErc(showErc ? false : true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-caret-down-square h-6 text-white"
              viewBox="0 0 16 16"
            >
              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
            </svg>
          </div>
          <div className="flex justify-between items-center px-3 rounded-lg py-1 cursor-pointer space-x-3 border-2 border-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-wallet2 text-white h-6"
              viewBox="0 0 16 16"
            >
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
            </svg>
            <p className="text-2xl text-white">Balance : {App.balance} {App.symbol} </p>
          </div>
        </div>
        {showErc ? (
          <>
            <div className=" px-1 mt-3 flex justify-evenly items-center">
              <input
                type="text"
                className="px-5 py-2 rounded-lg border-2 border-blue-700"
                name=""
                placeholder="Paste Erc20 Token"
                id=""
              />
              {ercLoading ? (
                <>
                  {" "}
                  <TailSpin 
                  width={28}
                  height={28}
                  color={white}
                  />
                </>
              ) : tokenChanged ? (
                <button className="border-2 border-white px-8 text-yellow-50 py-2 rounded-lg bg-red-700">
                  Remove
                </button>
              ) : (
                <button className="border-2 border-white px-8 text-yellow-50 py-2 rounded-lg bg-blue-700">
                  Select
                </button>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Send;
