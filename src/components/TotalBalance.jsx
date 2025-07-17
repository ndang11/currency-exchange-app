// src/components/TotalBalance.jsx
import React from "react";
import { convert } from "../utils/exchangeRates";

export default function TotalBalance({ balances, defaultCurrency }) {
  // Sum all balances converted to default currency
  const total = Object.entries(balances).reduce((acc, [cur, amount]) => {
    return acc + convert(amount, cur, defaultCurrency);
  }, 0);

  return (
    <div>
      <h3>
        Total Value in {defaultCurrency}: {total.toFixed(3)} {defaultCurrency}
      </h3>
    </div>
  );
}
