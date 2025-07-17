// src/components/DepositForm.jsx
import React, { useState } from "react";

export default function DepositForm({ onDeposit }) {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert("Enter a valid amount");
      return;
    }
    onDeposit(currency, amt);
    setAmount("");
  };

  return (
    <form onSubmit={handleDeposit}>
      <h3>💳 Deposit Money</h3>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <input className="depo-input"
        type="number"
        step="any"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={`Amount in ${currency}`}
      />
      <button type="submit" className="btn-submit">Deposit</button>
    </form>
  );
}
