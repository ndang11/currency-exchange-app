# Currency Exchange Wallet

> A professional React-based multi-currency wallet exchange application with a modern UI design.

---

## Problem Statement
This application provides a clean, professional solution to these challenges with a modern, responsive interface.
:
- Track balances across different currencies (USD, EUR, XAF)
- Perform quick currency exchanges
- See their total portfolio value in their preferred currency
- Store transaction data persistently

---

## Project Goals

- Allow users to manage multiple currency balances
- Enable quick and easy currency exchanges
- Display total portfolio value in default currency
- Provide persistent data storage using localStorage
- Create responsive, professional UI design
- Deliver smooth user experience with icons

---

##  Tech Stack

**Frontend:**
- React 19.1.0
- React Icons (Font Awesome)
- Vite (Build tool)
- CSS3 

**Storage:**
- Browser LocalStorage

**Build & Deployment:**
- Vite
- Vercel

## Features

- **Multi-Currency Wallet** - Manage USD, EUR, and XAF balances
- **Deposit Funds** - Add money to any currency
- **Currency Exchange** - Convert between currencies with one click
- **Total Balance View** - See portfolio value in your default currency
- **Default Currency Selection** - Choose your preferred currency
- **Auto-Save** - All transactions saved to localStorage automatically
- **Fully Responsive** - Works seamlessly on mobile and desktop

## Live Demo

**Frontend:** https://currency-exchange-app-ux33.vercel.app/

---

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/ndang11/currency-exchange-app.git
cd currency-exchange-app
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## How to Use

1. **Set Default Currency** - Select your preferred currency from the dropdown
2. **View Balances** - Check all your currency balances at a glance
3. **Deposit Money** - Fill in the currency and amount, click "Deposit"
4. **Exchange Currency** - Select from/to currencies, enter amount, click "Exchange"
5. **Monitor Total** - Watch your total portfolio value update automatically

**Future Enhancement:** Integrate real-time API for live exchange rates

---

##  Data Storage

All data is stored locally in your browser using **localStorage** with the key `react-currency-wallet`. This includes:
- Current balances for each currency
- Default currency preference

Data persists across browser sessions.

---

## Future Features

- Transaction history with timestamps
- Analytics dashboard with charts
- Dark mode toggle
- Real-time exchange rates API integration
- PWA support (offline access)
- Exchange rate alerts
- Export transaction reports (CSV/PDF)
- Savings goals tracker

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add new feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Author

**NDANG-KAH Ambei**  
Frontend Developer

- GitHub: [@ndang11](https://github.com/ndang11)
- LinkedIn: [@ndang-ambei](https://www.linkedin.com/in/ndang-ambei-84a97037b/)
- Email: [ndangkahambei@gmail.com]


**Happy Currency Exchanging! **