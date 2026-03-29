// src/components/CurrencyDisplay.jsx
import React from "react";
import { FaCoins } from "react-icons/fa";

const currencyInfo = {
  USD: { flag: "🇺🇸", name: "US Dollar" },
  EUR: { flag: "🇪🇺", name: "Euro" },
  XAF: { flag: "🇨🇲", name: "CFA Franc" },
};

export default function CurrencyDisplay({ balances, defaultCurrency }) {
  return (
    <div className="balance">
      <div className="card-header">
        <FaCoins className="card-icon" />
        <h3>Your Balances</h3>
      </div>
      <ul className="other-list">
        {Object.entries(balances).map(([currency, amount]) => {
          const info = currencyInfo[currency] || { flag: "💱", name: currency };
          return (
            <li className="list" key={currency}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                <span style={{ fontSize: "1.5rem" }}>{info.flag}</span>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "1rem" }}>
                    {currency}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#666", opacity: 0.8 }}>
                    {info.name}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#667eea",
                  }}
                >
                  {amount.toFixed(2)}
                </span>
                {currency === defaultCurrency && (
                  <span className="default-badge">Default</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
