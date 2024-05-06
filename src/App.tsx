import { useEffect, useState } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store/store";

function App() {
  const { cryptocurrencies } = useCryptoStore();

  useEffect(() => {
    cryptocurrencies;
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>cryptocurrency</span> quoter
        </h1>
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
