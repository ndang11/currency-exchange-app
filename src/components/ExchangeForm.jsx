// src/components/ExchangeForm.jsx
import React, { useState } from "react";

const currencies = ["USD", "EUR", "XAF"];

export default function ExchangeForm({ balances, onExchange }) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const handleExchange = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);

    if (
      isNaN(amt) ||
      amt <= 0 ||
      fromCurrency === toCurrency ||
      balances[fromCurrency] < amt
    ) {
      alert(
        "Invalid exchange: check amount, source/target currencies, and balance."
      );
      return;
    }

    onExchange(fromCurrency, toCurrency, amt);
    setAmount("");
  };

  return (
    <form onSubmit={handleExchange}>
      <h3>Exchange Currency</h3>
      <div>
        <label>From:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
      <input
        type="number"
        step="any"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Exchange</button>
    </form>
  );
}
