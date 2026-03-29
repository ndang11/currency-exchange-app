// src/components/TotalBalance.jsx
import React from "react";
import { FaChartLine } from "react-icons/fa";
import { convert } from "../utils/exchangeRates";

export default function TotalBalance({ balances, defaultCurrency }) {
  // Sum all balances converted to default currency
  const total = Object.entries(balances).reduce((acc, [cur, amount]) => {
    return acc + convert(amount, cur, defaultCurrency);
  }, 0);

  return (
    <div className="total-balance">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <FaChartLine style={{ fontSize: "1.5rem" }} />
        <h3>Total Balance</h3>
      </div>
      <div className="total-amount">
        {total.toFixed(2)} {defaultCurrency}
      </div>
    </div>
  );
}
