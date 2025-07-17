// src/App.jsx
import React, { useState } from "react";
import { convert } from "./utils/exchangeRates";
import CurrencyDisplay from "./components/CurrencyDisplay";
import DepositForm from "./components/DepositForm";
import ExchangeForm from "./components/ExchangeForm";
import DefaultCurrencySelector from "./components/DefaultCurrencySelector";
import TotalBalance from "./components/TotalBalance";

const STORAGE_KEY = "react-currency-wallet";

const initialBalances = {
  USD: 100,
  EUR: 500,
  XAF: 10000,
};

export default function App() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? JSON.parse(stored) : null;

  const [balances, setBalances] = useState(parsed?.balances || initialBalances);
  const [defaultCurrency, setDefaultCurrency] = useState(
    parsed?.defaultCurrency || "USD"
  );

  const saveToStorage = (newBalances, newDefault) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ balances: newBalances, defaultCurrency: newDefault })
    );
  };

  const handleDeposit = (currency, amount) => {
    const newBalances = {
      ...balances,
      [currency]: (balances[currency] || 0) + amount,
    };
    setBalances(newBalances);
    saveToStorage(newBalances, defaultCurrency);
  };

  const handleExchange = (fromCur, toCur, amount) => {
    // const { convert } = require("./utils/exchangeRates"); // <-- Remove this line
    const amountInTarget = convert(amount, fromCur, toCur); // <-- Use 'convert' directly

    const newBalances = {
      ...balances,
      [fromCur]: balances[fromCur] - amount,
      [toCur]: (balances[toCur] || 0) + amountInTarget,
    };
    setBalances(newBalances);
    saveToStorage(newBalances, defaultCurrency);
  };

  const handleDefaultCurrencyChange = (currency) => {
    setDefaultCurrency(currency);
    saveToStorage(balances, currency);
  };

  return (
    <div className="main-container" style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif" }}>
        <div className="logo">
          <img src="https://th.bing.com/th/id/OIP.XyACFjnkdbWvkq1W4Q4JfAHaE8?w=240&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />
        </div>
      <h1>Royalty's Currency Exchange Wallet</h1>
      <DefaultCurrencySelector
        defaultCurrency={defaultCurrency}
        setDefaultCurrency={handleDefaultCurrencyChange}
      />
      <div className="card">
        <CurrencyDisplay balances={balances} defaultCurrency={defaultCurrency} />
      </div>
      <div className="card">
         <TotalBalance balances={balances} defaultCurrency={defaultCurrency} />
      </div>
      <div className="card">
        <DepositForm onDeposit={handleDeposit} />
      </div>
      <div className="card">
          <ExchangeForm balances={balances} onExchange={handleExchange} />
      </div>
    </div>
  );
}