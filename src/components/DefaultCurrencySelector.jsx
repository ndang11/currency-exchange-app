// src/components/DefaultCurrencySelector.jsx
import React from "react";

const currencies = ["USD", "EUR", "XAF"];

export default function DefaultCurrencySelector({ defaultCurrency, setDefaultCurrency }) {
  return (
    <div className="default">
      <label>
        Default Currency:
        <select className="set"
          value={defaultCurrency}
          onChange={(e) => setDefaultCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
