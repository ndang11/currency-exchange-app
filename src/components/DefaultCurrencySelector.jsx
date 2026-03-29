// src/components/DefaultCurrencySelector.jsx
import React from "react";
import { FaGear } from "react-icons/fa6";

const currencies = ["USD", "EUR", "XAF"];
const currencyFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  XAF: "🇨🇲",
};

export default function DefaultCurrencySelector({ defaultCurrency, setDefaultCurrency }) {
  return (
    <div className="default">
      <div className="card-header">
        <FaGear className="card-icon" />
        <h3>Set Default Currency</h3>
      </div>
      <div className="form-group">
        <label htmlFor="default-currency">Choose your default currency</label>
        <select
          id="default-currency"
          value={defaultCurrency}
          onChange={(e) => setDefaultCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {currencyFlags[cur]} {cur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
