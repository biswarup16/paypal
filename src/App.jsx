import { createContext,useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import { ethers } from 'ethers';

const AppState = createContext();

function App() {
  const {ethereum} = window;
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState('');
  const [chain, setChain] = useState('');
  const [symbol, setSymbol] = useState('')
  const [balance, setBalance] = useState('')
  const [currency, setCurrency] = useState('')

  useEffect(() => {
    async function getBal() {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner();
      const balance = await signer.getBalance();
      setBalance(ethers.utils.formatEther(balance))
  }
  getBal()
  }, [])
  


const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
  

  return (
    <AppState.Provider value={{setLogin,address, setAddress,chain , setChain, symbol, setSymbol, balance, setBalance, currency, setCurrency}}>
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
