// src/components/DepositForm.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

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
      <div className="card-header">
        <FaPlus className="card-icon" />
        <h3>Deposit Money</h3>
      </div>
      <div className="form-group">
        <label htmlFor="currency">Select Currency</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">🇺🇸 USD - US Dollar</option>
          <option value="EUR">🇪🇺 EUR - Euro</option>
          <option value="XAF">🇨🇲 XAF - Central African CFA Franc</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter amount in ${currency}`}
        />
      </div>
      <button type="submit">
        <FaPlus /> Deposit
      </button>
    </form>
  );
}
