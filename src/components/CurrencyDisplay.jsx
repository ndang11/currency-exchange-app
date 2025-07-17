// src/components/CurrencyDisplay.jsx
import React from "react";

export default function CurrencyDisplay({ balances, defaultCurrency }) {
  return (
    <div className="balance">
      <h3>Balances</h3>
      <ul className="other-list">
        {Object.entries(balances).map(([currency, amount]) => (
          <li className="list" key={currency}>
            {currency}: {amount.toFixed(2)} {currency}
            {currency === defaultCurrency && " (Default)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
