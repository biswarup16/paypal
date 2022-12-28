import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";

const AppState = createContext();

function App() {

  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState('');
  const [chain, setChain] = useState('');
  return (
    <AppState.Provider value={{setLogin,address, setAddress,chain , setChain}}>
      {login ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Login />
      )}
    </AppState.Provider>
  );
}

export default App;
export {AppState}
