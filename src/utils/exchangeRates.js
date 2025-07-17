// src/utils/exchangeRates.js

// Exchange rates relative to USD
export const rates = {
  USD: 1,
  EUR: 1.24,
  XAF: 0.0017,
};

// Convert amount from fromCurrency to toCurrency
export function convert(amount, fromCurrency, toCurrency) {
  const amountInUSD = amount * rates[fromCurrency];
  return amountInUSD / rates[toCurrency];
}
