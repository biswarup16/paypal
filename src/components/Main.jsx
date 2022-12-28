import React, { useState } from "react";
import Global from "./page/Global";
import RecentTx from "./page/RecentTx";
import Recipients from "./page/Recipients";
import Send from "./page/Send";

const Main = () => {
  const [route, setRoute] = useState("send");
  return (
    <>
      <div className="flex justify-center items-center lg:mt-32">
        <div className="max-w-2xl mx-auto glass border-2 border-blue-700">
          <div className="flex  lg:px-5 pt-3 space-x-2 text-white text-2xl justify-evenly items-center">
            <p onClick={()=>{setRoute('send')}} className="bg-gray-500 py-1 lg:px-5 hover:bg-slate-500 hover:text-blue-700 cursor-pointer">
              Send
            </p>
            <p onClick={()=>{setRoute('recipients')}} className="bg-gray-500 py-1 lg:px-5 hover:bg-slate-500 hover:text-blue-700 cursor-pointer">
              Recipients
            </p>
            <p onClick={()=>{setRoute('recentTx')}} className="bg-gray-500 py-1 lg:px-5 hover:bg-slate-500 hover:text-blue-700 cursor-pointer">
              Recent Tx
            </p>
            <p onClick={()=>{setRoute('globalTx')}} className="bg-gray-500 py-1 lg:px-5 hover:bg-slate-500 hover:text-blue-700 cursor-pointer">
              Global Tx
            </p>
          </div>
          <hr className="mt-3 mb-1" />
          <div className="lg:px-5 bg-black py-3 rounded-lg">
            {route == "send" ? (
              <>
                {" "}
                <Send />{" "}
              </>
            ) : route == "recipients" ? (
              <>
                <Recipients />
              </>
            ) : route == "recentTx" ? (
              <>
                {" "}
                <RecentTx />{" "}
              </>
            ) : route == "globalTx" ? (
              <>
                {" "}
                <Global />{" "}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
