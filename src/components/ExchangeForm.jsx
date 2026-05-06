// src/components/ExchangeForm.jsx
import React, { useState } from "react";
import { FaArrowRightArrowLeft, FaArrowRight } from "react-icons/fa6";

const currencies = ["USD", "EUR", "XAF"];
const currencyFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  XAF: "🇨🇲",
};

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

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <form onSubmit={handleExchange}>
      <div className="card-header">
        <FaArrowRightArrowLeft className="card-icon" />
        <h3>Exchange Currency</h3>
      </div>

      <div className="exchange-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <select
            id="from"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {currencyFlags[cur]} {cur}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={swapCurrencies}
          className="exchange-icon"
          title="Swap currencies"
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <FaArrowRight />
        </button>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <select
            id="to"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {currencyFlags[cur]} {cur}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          step="any"
          placeholder={`Enter amount in ${fromCurrency}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit">
        <FaArrowRightArrowLeft /> Exchange Now
      </button>
    </form>
  );
}
